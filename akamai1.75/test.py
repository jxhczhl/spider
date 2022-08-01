import json
import urllib.parse

import requests
import urllib3.util.ssl_
from lxml import etree
import execjs

urllib3.util.ssl_.DEFAULT_CIPHERS = ":".join(
    i for i in urllib3.util.ssl_.DEFAULT_CIPHERS.split(":") if not i.startswith("!"))

with open("./1.js") as f:
    jscode = f.read()
js = execjs.compile(jscode)

domain = "https://www.koreanair.com"


def index():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    }
    url = "https://www.koreanair.com/booking/select-flight/departure"

    response = requests.get(url, headers=headers)
    result = response.text
    # print(response.text)
    xpath = etree.HTML(result)
    allScr = xpath.xpath("//script/@src")
    akamaiUrl = ""
    for src in allScr:
        if "." not in src:
            akamaiUrl = src
            break

    return akamaiUrl


def get_abck(url, ttt) -> dict:
    url = url
    data = {"sensor_data": ttt}
    headers = {
        "content-type": "text/plain;charset=UTF-8"
    }
    res = requests.post(url, data=data, headers=headers)
    print(res.text)
    setCookie = res.headers.get("Set-Cookie")
    cookies = setCookie.split(";")
    ck = {}
    for c in cookies:
        if "_abck" in c:
            ck["_abck"] = c.replace("_abck=", "")
        if "bm_sz" in c:
            ck["bm_sz"] = c.replace(" Secure, bm_sz=", "")
        if len(ck) >= 2: return ck
    return ck


# get_abck()

def visior(a, b, ck):
    headers = {
        'authority': 'www.koreanair.com',
        'accept': 'application/json',
        'accept-language': 'zh-CN,zh;q=0.9',
        'channel': 'pc',
        'content-type': 'application/json',
        'ksessionid': '93e4dbaf67ef4287b28d9ee70dfba21e20220731W',
        'origin': 'https://www.koreanair.com',
        'referer': 'https://www.koreanair.com/booking/select-flight/departure',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
    }
    cookies = {
        "_abck": ck.get("_abck"),
        "bm_sz": ck.get("bm_sz")
    }
    data2 = {
        "currencyCode": "CNY",
        "searchPreferences": {
            "showSoldOut": True
        },
        "itineraries": [
            {
                "departureDateTime": "2022-09-14T00:00:00.000",
                "destinationLocationCode": a,
                "originLocationCode": b,
                "departureCommercialFareFamilies": [
                    "INTEY2",
                    "INTEY1",
                    "INTPR2"
                ]
            }
        ],
        "travelers": [
            {
                "passengerTypeCode": "ADT"
            }
        ]
    }
    for i in range(2):
        try:
            response = requests.post('https://www.koreanair.com/api/rp/dx/search/air-offers', headers=headers,
                                     data=json.dumps(data2), cookies=cookies, timeout=5)
            print(response.text)
            if response.status_code == 200: return
        except:
            print("重试")


akamaiUrl = index()

ttt = js.call("get_sensor_data")
# print(ttt)

ck = get_abck(urllib.parse.urljoin(domain, akamaiUrl), ttt)
# print(ck)
visior("ICN", "CAN", ck)

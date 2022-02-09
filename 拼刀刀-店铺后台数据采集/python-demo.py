import requests,execjs

header_cookie=''  #这里传入自己店铺的cookie
headers = {
    'authority': 'mms.pinduoduo.com',
    'pragma': 'no-cache',
    'cache-control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
    'anti-content': '',
    'content-type': 'application/json',
    'sec-ch-ua-mobile': '?0',
    'etag': 'J0kGf2HFGJivq3jp0kBK0uXS74mry91A',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
    'accept': '*/*',
    'origin': 'https://mms.pinduoduo.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    'referer': 'https://mms.pinduoduo.com/goods/goods_list',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cookie': header_cookie,
}
data = '{"page":1,"is_onsale":0,"size":10}'

with open("./pdd_anti-content.js",encoding="utf-8")as f:
    js_code =f.read()
js=execjs.compile(js_code)


for a in range(1):
    anti_content = js.call("hliang")
    # print(anti_content)
    headers["anti-content"] = anti_content
    r = requests.session()
    response = r.post('https://mms.pinduoduo.com/vodka/v2/mms/query/display/mall/goodsList', headers=headers, data=data)
    print(response.text)

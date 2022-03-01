# -*- coding: utf-8 -*-

import re
import time
import pandas as pd
import requests
import logging
import urllib.parse
from lxml import etree

"""
@Time ： 2022/2/23 13:48
@Auth ： 黑脸怪
@File ：pd.py

"""

logging.basicConfig(
    level=logging.INFO,
    format='%(lineno)s行 时间:%(asctime)s 文件名:%(filename)s %(levelname)s: %(message)s',
    datefmt='%H:%M:%S',
    filename="./mylog.txt"
)

class douban():
    def __init__(self):
        self.num=0 #序号
        self.start_url=""
        self.old_url=[] #访问过的放这里 判断存在就不继续往下放了
        self.list_page=[] #所有详情页放这里
        self.next_page=[] #访问列表也后 把下一页存在这里
        self.err_page=[] #暂时失败的url存放在这 到时候重试
        self.result_list = []
        self.headers = {
            'Connection': 'keep-alive',
            'Cache-Control': 'max-age=0',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Sec-Fetch-User': '?1',
            'Sec-Fetch-Dest': 'document',
            'Accept-Language': 'zh-CN,zh;q=0.9'
}

    def main(self,url):
        #这里赋值是为了之后urljoin用
        self.start_url=url
        self.next_page.append(url)
        while len(self.next_page)>0:
            self.list_and_next()
            # print("list_page->>>>>>>",self.list_page)
            print("next_page->>>>>>>",self.next_page)
            time.sleep(2)
        while len(self.list_page)>0:
            url=self.list_page.pop()
            html=self.data_get(url)
            if html is not None:
                self.data_parse(html,url)
            time.sleep(2)
        if len(self.result_list)>0:
            self.save_to_xlsx("./豆瓣影评-{}.xlsx".format(str(int(time.time()))))

    #输入列表的网址 获取列表url和下一页url保存到self变量中

    def list_and_next(self):
        url=self.next_page.pop()
        try:
            response=requests.get(url,headers=self.headers,timeout=20)
        except Exception as e:
            logging.info("访问出错")
            print(e)
            return None

        if "评论" in response.text:
            html=etree.HTML(response.text)
            div_list=html.xpath('//*[@id="content"]/div/div[1]/div[1]/div//div/div/div[3]/a[3]/@href')
            if len(div_list) ==0:
                div_list=html.xpath('//*[@id="content"]/div/div[1]/div[1]/div[2]/div//div/div/div[3]/a[3]/@href')

            n_p = html.xpath('//*[@id="content"]/div/div[1]/div[2]/span[4]/a/@href')
            if len(n_p)==0:
                n_p=html.xpath('//*[@id="content"]/div/div[1]/div[2]/span[5]/a/@href')

            for l in div_list:
                if l not in self.old_url:
                    self.list_page.insert(0,l)

            if len(n_p)>0:
                next_page=n_p[0]
                if next_page not in self.old_url:
                    self.next_page.append(urllib.parse.urljoin(self.start_url,next_page))
            else:
                print("没有下一页了。")

        else:
            logging.info("其他错误，暂时没做解析,状态码："+str(response.status_code)+str(response.text))

    def data_get(self,url):
        res=requests.get(url,headers=self.headers,timeout=20)
        # logging.debug(url+"状态码："+str(res.status_code))
        try:
            if res.status_code==200:
                return res.text
            elif res.status_code==404:
                return None
            elif res.status_code==403:
                logging.info(url+"状态码："+str(res.status_code)+"可能没权限访问")
                logging.info(res.text)
            else:
                logging.info("失败，状态码："+str(res.status_code))
                self.err_page.append(url)
                return None
        except:
            self.err_page.append(url)
    def data_parse(self,html,url):
        html2 = etree.HTML(html)
        author = html2.xpath('//*[@class="main-hd"]/a/span/text()')
        star = html2.xpath('//*[@id="content"]/div/div[1]/div[1]/div/header/span[1]/@title')
        R_time = html2.xpath('//*[@id="content"]/div/div[1]/div[1]/div/header/span[3]/text()')
        Title = html2.xpath('//*[@id="content"]/div/div[1]/h1/span/text()')
        Topics = html2.xpath('//*[@id="content"]/div/div[1]/a/h2/text()')
        Spoiler = html2.xpath('//*[@class="main-bd"]/p[1]/text()')
        try:
            content = re.search('<p>(.+)</p>', html).group(0)
            content = content.replace('<div class="image-container image-float-center"><div class="image-wrapper">',
                                      "").replace("</div></div>", "")
        except:
            logging.debug("获取title失败")
            content="获取title失败"
        zan = html2.xpath('//*[@class="main-panel-useful"]/button[1]/text()')
        cai = html2.xpath('//*[@class="main-panel-useful"]/button[2]/text()')
        Resp = re.findall('\[\{\".+\"\}\]', html)

        result = []
        self.num+=1
        result.append(self.num)
        result.append(url)
        result.append(author[0]) if len(author) > 0 else result.append("")
        result.append(star[0]) if len(star) > 0 else result.append("")
        result.append(R_time[0]) if len(R_time) > 0 else result.append("")
        result.append(Title[0]) if len(Title) > 0 else result.append("")
        result.append(Topics[0]) if len(Topics) > 0 else result.append("")
        result.append(str(Spoiler[0]).strip()) if len(Spoiler) > 0 else result.append("")
        result.append(content)
        result.append(str(zan[0]).strip()) if len(zan) > 0 else result.append("")
        result.append(str(cai[0]).strip()) if len(cai) > 0 else result.append("")
        result.append(Resp[0]) if len(Resp) > 0 else result.append("")
        # print(result)
        logging.info(Title)
        self.result_list.append(result)
    def save_to_xlsx(self,filename):
        columns = ["序号","评论链接","发布者", "评分星级", "评论时间","标题","话题","是否可能有剧透","影评内容","有用数","没用数","回应"]
        dt = pd.DataFrame(self.result_list, columns=columns)
        dt.to_excel(filename,index=0)
        logging.info("完成~~~~")


d=douban()
d.main("https://movie.douban.com/subject/26752088/reviews?start=0")

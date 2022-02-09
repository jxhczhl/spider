说明：本项目是获取店铺后台的，并非前台用户的商品信息
完成时间 2022/2/9

## 演示地址： http://z.hl98.cn/index.php?share/file&user=102&sid=CiAXx7ry

后台只有一个加密参数 anti-content,所以只要扣下对应的js代码 生成成功的参数就行 (js逆向难度 异步+webpack模块里面的webpack，环境检测，补环境)

目录说明：

    --express_api.js        node.js搭建一个api接口，访问接口 :18080/anti-content就能直接获取anti-content的结果了
    --main.exe              可视化的工具
    --pdd-易语言源码.e       exe的源码 易语言版的（搭配anti的接口使用） 在常量表里设置自己的接口地址
    --pdd_anti-content.js   扣下来的js代码 直接调用里面的函数就可以获得anti-content结果 
    --python-demo.py        python获取商品列表的demo



* exe的需要设置自己的anti-content接口地址
![image](https://user-images.githubusercontent.com/41224971/153142992-d7e0b318-8a3c-493e-b740-764c7435dc10.png)

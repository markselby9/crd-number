#crd-number
Several util methods for Chinese, Roman and Digit number.  
crd-number是关于中文数字，罗马数字和阿拉伯数字的一些工具方法。  
欢迎提交Issues或者Pull requests。

##install
npm install crd-number

##usage
Digit2SimplifiedChinese(chinese), Digit2TraditionalChinese(digit)
阿拉伯数字转换成简体中文（繁体中文）
暂只支持int范围内整数.

Roman2Digit(roman), Digit2Roman(number)【0<=number<4000】
罗马数字和阿拉伯数字互相转换.

TelephoneNumberDigit2Chinese(digit), TelephoneNumberChinese2Digit(chinese)
电话号码 中文数字和阿拉伯数字互相转换.

isNumeric(x)
判断变量x是否为数字.

##test
使用mocha测试，在package目录里运行mocha命令。
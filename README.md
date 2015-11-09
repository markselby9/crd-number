#crd-number  
A package including several util methods for: 

* Chinese number
* Roman number
* Digit number.  

crd-number是关于中文数字，罗马数字和阿拉伯数字的一些工具方法。

欢迎提交Issues或者Pull requests。


## Install

npm install crd-number

## How to use

Digit2SimplifiedChinese(chinese), Digit2TraditionalChinese(digit)

```  
console.log(crd.Digit2SimplifiedChinese(-897573589));
console.log(crd.Digit2TraditionalChinese(-897982735));
```

阿拉伯数字转换成简体中文（繁体中文）
暂只支持int范围内整数.

Roman2Digit(roman), Digit2Roman(number)【0<=number<4000】

```
console.log(crd.Digit2Roman(2333));
console.log(crd.Roman2Digit(crd.Digit2Roman(2333)));
```
罗马数字和阿拉伯数字互相转换.

TelephoneNumberDigit2Chinese(digit), TelephoneNumberChinese2Digit(chinese)

```
console.log(crd.TelephoneNumberDigit2Chinese(12+34+'12345-677'));
console.log(crd.TelephoneNumberChinese2Digit('12345=3124'));
```

电话号码 中文数字和阿拉伯数字互相转换.

isNumeric(x)


```
var isNum = isNumeric(100);
```

To determine whether x is a number.  
判断变量x是否为数字.

##test

To test, run  
```
mocha
```

使用mocha测试，在package目录里运行mocha命令。

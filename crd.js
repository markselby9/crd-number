/**
 * Created by fengchaoyi on 15/11/5.
 */
var table = require('./table.js');
var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

/**
 * @return {string}
 */
function Digit2SimplifiedChinese(num){
    if (!isNumeric(num)){
        return "ERROR: not a number!";
    }
    if (num>MAX_INT || num<MIN_INT){
        return "ERROR: number exceeds limit!";
    }
    var result = "";
    if (num<0){
        result+="负";
        num*=-1;
    }
    var num_length = num.toString().length;
    for (var i = 0; i < num_length; i++){
        var pos = num_length-i-1;
        var num1 = pos / 4;    //万,亿
        var num2 = pos % 4;    //1, 100, 100, 1000
        var num3 = num.toString()[i];
        var temp_str = table.ChineseSimplifiedTable[num3];
        if (num2>=1){
            temp_str+=table.ChineseSimplifiedTable[Math.pow(10, num2).toString()];
        }
        if (num1==1){
            temp_str+=table.ChineseSimplifiedTable[10000];
        }else if (num1==2){
            temp_str+=table.ChineseSimplifiedTable[100000000];
        }
        result+=temp_str;
    }
    return result;
}

function Digit2TraditionalChinese(num){
    if (!isNumeric(num)){
        return "ERROR: not a number!";
    }
    if (num>MAX_INT || num<MIN_INT){
        return "ERROR: number exceeds limit!";
    }
    var result = "";
    if (num<0){
        result+="負";
        num*=-1;
    }
    var num_length = num.toString().length;
    for (var i = 0; i < num_length; i++){
        var pos = num_length-i-1;
        var num1 = pos / 4;    //万,亿
        var num2 = pos % 4;    //1, 100, 100, 1000
        var num3 = num.toString()[i];
        var temp_str = table.ChineseTraditionalTable[num3];
        if (num2>=1){
            temp_str+=table.ChineseTraditionalTable[Math.pow(10, num2).toString()];
        }
        if (num1==1){
            temp_str+=table.ChineseTraditionalTable[10000];
        }else if (num1==2){
            temp_str+=table.ChineseTraditionalTable[100000000];
        }
        result+=temp_str;
    }
    return result;

}

/**
 * @return {string}
 */
function TelephoneNumberChinese2Digit(str){
    var result = "";
    for (var i = 0; i < str.length; i++){
        if (('0'<=str[i])&&('9'>=str[i])){
            result+=str[i];
        }
        else if (table.ChineseSimplifiedTable[str[i]]!=undefined) {
            result += table.ChineseSimplifiedTable[str[i]];
        }
        else{
            result += str[i];
        }
    }
    return result;
}

/**
 * @return {string}
 */
function TelephoneNumberDigit2Chinese(digits){
    var str = digits.toString();
    var result = "";
    for (var i = 0; i < str.length; i++){
        if (('0'<=str[i])&&('9'>=str[i])){
            if (table.ChineseSimplifiedTable[str[i]]!=undefined) {
                result += table.ChineseSimplifiedTable[str[i]];
            }
        }
        else{
            result += str[i];
        }
    }
    return result;
}

function Roman2Digit(){

}

function Digit2Roman(){
    
}

// isNumeric
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

if (require.main === module) {
    // 如果是直接执行 main.js，则进入此处
    // 如果 main.js 被其他文件 require，则此处不会执行。
    console.log('Thank you for using crd-number npm package, please check README for usage.');
}

exports.printMsg = function() {
    console.log("This is a message from crd-number package");
};
exports.TelephoneNumberDigit2Chinese = TelephoneNumberDigit2Chinese;
exports.TelephoneNumberChinese2Digit = TelephoneNumberChinese2Digit;
exports.isNumeric = isNumeric;
exports.Digit2SimplifiedChinese = Digit2SimplifiedChinese;
exports.Digit2TraditionalChinese = Digit2TraditionalChinese;
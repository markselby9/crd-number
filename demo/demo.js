/**
 * Created by fengchaoyi on 15/11/5.
 */
var crd = require("../crd.js");

crd.printMsg();
//console.log(crd.TelephoneNumberDigit2Chinese(12+34+'12345-677'));
//console.log(crd.TelephoneNumberChinese2Digit('12345=3124'));
console.log(crd.Digit2SimplifiedChinese(1233332345));
console.log(crd.Digit2SimplifiedChinese(-897573589));
console.log(crd.Digit2TraditionalChinese(1233332345));
console.log(crd.Digit2TraditionalChinese(-897982735));
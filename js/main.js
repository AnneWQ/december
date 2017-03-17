/**
 * Created by anne on 11/3/17.
 */
var a='4.36.5';
// console.log( parseFloat(a));
// console.log( Number(a));
// console.log( parseInt(a));

var b=1200.11;
function addCommas(val) {
    var value = val.toString().split('.');
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(value[0])) {
        value[0] = value[0].replace(rgx, '$1' + ',' + '$2')
    }
    return value[1] ? (value[0] + '.' + value[1]) : value[0]
}
// console.log(addCommas(b));

var arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(function(){
    return Math.random() - 0.6;
});
// console.log(arr);

function getFileExtension(filename) {
    return filename.slice((filename.lastIndexOf('.')-1>>>0)+2);
}
console.log(getFileExtension('dsm'));

function commas(value) {
    var addCommasVal=value.toString().split('.');
    var intPart=addCommasVal[0];
    var folatPart=addCommasVal[1];
    var rgx=/(\d+)(\d{3})/;
    while(rgx.test(intPart)){
        intPart=intPart.replace(rgx,'$1'+','+'$2')
    }
    return folatPart?(intPart+'.'+folatPart):intPart;
}
// $("div").on("click mouseover",function () {
//
// });
//
// $("dov").on({
//     click:function () {
//
//     },
//     mouseover:function () {
//
//     }
// })

var x=0;
setTimeout(function () {
    console.log(x);
    var x=9;
},1000);
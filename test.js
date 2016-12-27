// var a = function() {
//     alert("Hello!");
// }
//
// var myA = new a();

var obj = {};
for(var t = -10, i = 0; t <= 10; t++, i++) {
    obj[t] = t + " - item value" + " - " + i;
}

console.log(obj);
var myNum = 123456.789;

var Num = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
console.log(Num);

Num = myNum.toLocaleString("id-ID", {style: "currency", currency: "IDR"});
console.log(Num);

Num = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(Num);

Num = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
console.log(Num);

Num = myNum.toLocaleString("en-SG", {style: "currency", currency: "SGD"});
console.log(Num);

var myPercent = 0.5

Num = myPercent.toLocaleString(undefined, {style: "percent"});
console.log(Num);

var temperature = 100;

Num = temperature.toLocaleString(undefined, {style: "unit", unit: "celsius"});
console.log(Num);
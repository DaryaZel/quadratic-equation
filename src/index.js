module.exports =function solveEquation(equation) { 
var arr = equation.split(" ");  
var a= +arr[0];  
var b= +(arr[3]+arr[4]);
var c=+(arr[7]+arr[8]); 
var D = b * b - 4 * a * c;
if (D > 0) {
var x1 = Math.round((-b - Math.sqrt(D)) / (2 * a)); 
var x2= Math.round((-b + Math.sqrt(D)) / (2 * a));
}
else if (D == 0) { 
var x3 = Math.round(-b / (2 * a)); 
}
else (D < 0) { 
var no = 'Нет решений';
}

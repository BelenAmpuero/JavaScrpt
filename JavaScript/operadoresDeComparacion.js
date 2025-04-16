console.log(4 < 7);

console.log(4 > 7);

console.log(4 < 4);

console.log(4 == 7);

// = asignacion
// == Igualdad. Verifica solo valor
// === Igualdad estricta. Verifica tipo de dato y valor.

console.log(3 == 3);
console.log(3 == '3');
console.log(3 === 3);
console.log(3 === '3');

// Asociatividad

var a = 1;
var b = 2;
var c = (a = b);

console.log(a);
console.log(b);
console.log(c);
function sumaTres(x) {
    console.log(x + 3);
}

sumaTres(5)

// FORMAS DE DECLARAR UNA FUNCION
// PRIMERO

function sumaTres(x) {
    return x + 3;
}

// SEGUNDO

var sumaTres = function(x) {
    return x + 3;
};

// TERCERO
var sumaTres = (x) => {
    return x + 3;
};
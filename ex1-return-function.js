
// sumar(2)(2) --> 4

// ES6
function sumar (x) {
    return function (y) {
        return x + y;
    }
}

// ES7
sum = (x) => {
    return (y) => x + y;
}

console.log(sumar(2)(2));

console.log(sum(2)(2));



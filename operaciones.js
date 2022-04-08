const math = {};

function sumar(x1, x2) {
    return x1 + x2;
}

function restar(x1, x2) {
    return x1 - x2;
}

function mult(x1, x2) {
    return x1 * x2;
}

function div(x1, x2) {
    if (x2 == 0) {
        console.log("No se puede hacer la division entre 0");
    }
    else {
        return x1 / x2;
    }
}

math.sumar = sumar;
math.restar = restar;
math.mult = mult;
math.div = div;

module.exports = math;
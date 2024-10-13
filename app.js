// // Contenido de app.js 
// // Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// // Solo un registro en consola para nosotros
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen =(dolares) => {
    return (dolares/oneEuroIs.USD)*oneEuroIs.JPY;
}
const fromEuroToDollar =(euro) => {
    return (euro)*oneEuroIs.USD;
}
const fromYenToPound =(yen) => {
    return (yen/oneEuroIs.JPY)*oneEuroIs.GBP;
}

console.log(fromDollarToYen(2))
console.log(fromEuroToDollar(1))
console.log(fromYenToPound(2))

module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen}
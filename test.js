// // Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// // Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
//     // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

//     // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})


test("One yen should be 0.0055591054313099035 british pound ", function() {
    const { fromYenToPound } = require('./app.js');
    
    const dollars = fromYenToPound(2);

    const expected = 2 * 0.0055591054313099035;

    expect(fromYenToPound(2)).toBe(0.011118210862619807);
})

test("One dolar should be 146.26168224299064 japan yen ", function() {
    const { fromDollarToYen } = require('./app.js');
    
    const dollars = fromDollarToYen(2);

    const expected = 2 * 146.26168224299064;

    expect(fromDollarToYen(2)).toBe(292.5233644859813);
})


const holaMundo = require('../hola_mundo_jest');

test('Deberia retornar Hola Mundo', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});
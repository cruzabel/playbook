import Pokemon from './pokemon'



test('1) Create a new object pokemon', () => {
  const myPokemonT = new Pokemon('Pikachu')
  expect(myPokemonT.name).toBe('Pikachu'); // Corrige esta prueba
});


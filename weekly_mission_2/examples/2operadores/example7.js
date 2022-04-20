// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Greolandia','Croacia']
const countriesContainingLand = countries7.filter((country) =>country.includes('land')) // esta es una función
   // indicación para solo filtrar elementos que incluyan "land"

console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log('Paises que contienen lan');
console.log(countriesContainingLand)

const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log("Paises que terminan en ia")
console.log(countriesEndsByia)
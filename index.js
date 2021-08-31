let name = 'Daniel'
console.log('Hola, ' + name);
console.log("Hola name");
console.log(`Hola, ${name}`);

let poem = "The wide Ocean"
const author = "Pablo Neruda"

const favesPoemLiteral = `My favorite poem is ${poem} by ${author}`;
const favesPoem = poem + " by " + author             

console.log(favesPoemLiteral)
console.log(favesPoem)

const stringPrimitive = "how are you?"
console.log(typeof stringPrimitive)
const stringObject = new String("I'm a staring")
console.log(typeof stringObject)

console.log(stringPrimitive[0])
console.log(stringPrimitive.charAt(0))
console.log(stringPrimitive.indexOf('are'))     
console.log(stringPrimitive.lastIndexOf('a'))
console.log(stringPrimitive.slice(8, 11))
console.log(stringPrimitive.length)
console.log(stringPrimitive.toUpperCase())
console.log(stringPrimitive.toLowerCase())




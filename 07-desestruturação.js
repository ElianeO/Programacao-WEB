// Desestruturação de vetor
let frutas = ['laranja', 'banana', 'maçã']

let [fruta1, fruta2, fruta3] = frutas

console.log({fruta1, fruta2, fruta3})

// Desestruturação parcial
let [x,y] = frutas // Primera e segunda frutas
console.log({x,y})

let[a,c] = frutas // Primera e terceira frutas
console.log({a,c})

let[i,j] = frutas // Segunda e terceira frutas
console.log({i,j})

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

//////////////////////////////////////////////////////////////////////////
// Desestruturação de objetos
let pessoa = {
    nome: 'Felicity Faria Fernandes',
    sexo: 'F',
    dataNasc: '20100-04-29',
    email: 'felicity@metaverso.com'

}
//  Na desestruturação de objetos, as variáveis avulsas:
//  1) precisam ter o MESMO nome das propriedades do objeto
//  2) Podem ser especificadas em qualquer ordem
//  3) Pode ser feita a desestruturação parcial

 let {sexo, nome, email} = pessoa

 console.log({nome,sexo,email})
 
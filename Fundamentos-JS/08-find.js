const numeros = [10,19,3,-4,13,-11,15,0,-1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']

//O método find() encontra o primeiro elemento de um vetor que corresponda ao retorno da função passada como parâmetro
let primeiroNegativo = numeros.find(n => n < 0)
let primeiroDIv5 = numeros.find(x => x % 5 === 0)
let comecaComM = frutas.find(f => f.charAt(0) === 'm')
let comecaComB = frutas.find(f => f.charAt(0) === 'b')

console.log({primeiroNegativo, primeiroDIv5, comecaComM})
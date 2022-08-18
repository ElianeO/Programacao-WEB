const numeros = [10,19,3,-4,13,-11,15,0,-1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']


// O método filter() cria um NOVO VETOR contendo apenas os elementos do vetor de origem que atendam ao critério da função 
// passada como parâmetro

let negativos = numeros.filter(i => i <=0)
let primeiroNegativo = numeros.find(n => n < 0)
let primeiroDIv5 = numeros.find(x => x % 5 === 0)
let comecaComM = frutas.find(f => f.charAt(0) === 'm')
let comecaComB = frutas.find(f => f.charAt(0) === 'b')

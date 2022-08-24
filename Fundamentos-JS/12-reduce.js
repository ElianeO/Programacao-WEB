let nums = [2,3,5,7,11,13,17,19,23,29,31]
let nomes = ['Aderbal', 'Joeliton', 'Neurivânia', 'Terebintina', 'Leucimara']

//reduce() ára somar todos os elementos do vetor nums
let soma = nums.reduce((acumulator, elemento) => acumulator + elemento)

let listaNomes = nomes.reduce((acum, el) => acum.toUpperCase() + ', ' + el.toUpperCase())

console.log({soma, listaNomes})
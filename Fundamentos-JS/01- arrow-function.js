function quadrado(n) {
    return n * n
}
console.log(quadrado(7))

/*Função equivalente no formato arrow function */
const quadrado2 = n => n * n

console.log(quadrado2(7))

/*Função tradicional com mais de 1 argumento e uma única linha de corpo contendo retur n*/

function soma(a,b,c){
    return a + b + c
}
console.log(soma(10,15,20))

//arrow function equivalente
//quando temos mais de um argumento, os parênteses são obrigatórios
const soma2 = (a,b,c) => a + b + c

console.log(soma2(10,15,20))

/*Função tradicional sem argumentos e com uma única linha de corpo*/

function aleatorio0a9(){
    //Retorna um número aleatório entre 0 e 9
    //Math.random() -> retorna um número aleatório fracionário entre 0 e 1
    //Math.floor() -> retira as casas decimais de um número fracionário
    return Math.floor(Math.random() * 10)
}
console.log(aleatorio0a9())

//Função tradicional com um argumento e múltiplas linhas de corpo

function fatorial(n){
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
    return fat
}

//Arrow function equivalente
//Não há economia de linhas/código em relação ao corpo da função   
const fatorialA = n => {
    let fat = 1
    for(let i = n; i > 1; i--) fat == i
    return fat
}
console.log(fatorialA(5))


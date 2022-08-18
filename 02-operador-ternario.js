let media = 7.2, resultado

// Estrutura if...else para definir o valor da variáveel resultado em função da condição media >= 6    
if (media >= 6) {
    resultado = 'Aprovado'
} else {
    resultado = 'Reprovado'
}
console.log(media, resultado)

//Usando o operador ternario
resultado = media >= 6 ? 'Aprovado' : 'Reprovado'

console.log(media, resultado)

let user = 'guest', msg

if(user === 'admin') msg = 'Login sucessful'
else msg = "You are not allowed here"

console.log({user, msg})

//converter a estrutura acima em um operador ternario
msg = user === 'admin' ? 'Login sucessful' : "You are not allowed here"

console.log({user, msg})
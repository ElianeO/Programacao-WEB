let nome = 'Gilcicleide'
let idade = 20
let cidade = 'Franca/SP'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.')

// Mesma mensagem usando string template
/* String template são strings especiais delimitadas entre os caraccteres ` ` (crase) que permitem a interpolação
 direta de variáveis */
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

/* Dentro  de uma string template, não estamos limitados a colocar apenas variáveis ${}, podemos colocar qualquer códgio
 de JS válido */
 console.log(`Daqui a 5 anos, ${nome.toUpperCase()} terá ${idade+5} anos.`)
 
 
let carros = ['Chevette', 'Fusca', 'Opala', 'Fiorino', 'Belina', 'Del Rey']

/* O método includes() testa se um dado elemento existe em um vetor. Retorna true se existe e false, caso contrário. */
let temFusca = carros.includes('Fusca')
let temBelina = carros.includes('Belina')
let temCorcel = carros.includes('Corcel')

console.log({temBelina, temCorcel, temFusca})
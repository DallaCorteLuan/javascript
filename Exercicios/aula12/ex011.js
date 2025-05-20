let idade = 68
    console.log(`Você tem ${idade} anos, portanto:`)
if(idade < 16){
    console.log('Não Vota')
} else if(idade < 18 || idade >65) {    
        console.log('voto é opcional')
} else {
    console.log('Voto Obrigatório')
}
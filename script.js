let numero1 = parseInt( prompt('Digite aqui o primeiro número da sua operação!'))
let sinal = prompt('Digite aqui o sinal da sua operação!')
let numero2 = parseInt( prompt ('Digite aqui o segundo número da sua operação'))


function calcularResultado(numero1, sinal, numero2){
    if(sinal === '+'){
    return numero1+numero2;
    }

    else if(sinal === '-'){
    return numero1-numero2;
    }

    else if(sinal === '*'){
    return numero1*numero2;
    }

    else if(sinal === '/'){
    return numero1/numero2
    } 
    else{
    return null
    }
}

const resultado = calcularResultado(numero1, sinal, numero2);

if (resultado!==null){
    alert(`O resultado é ${resultado}`);
}
else{
    alert(`Opção invalida.`)
}
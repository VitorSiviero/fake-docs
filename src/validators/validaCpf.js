const limpaCPF = (cpf) => {
    const cpfLimpo = cpf.replace(/\D/g, "")
    if(cpfLimpo.length !== 11) return console.log("Cpf invalido")
    if(cpfLimpo === cpf[0].repeat(11)) return console.log("Numeros Repetidos")
    
    let cpfParcial = cpfLimpo.slice(0, 9)
    return cpfParcial
}

export const criaDigito = (cpfParcial) => {
    let somatorio = 0

    for(let i = 0; i < cpfParcial.length; i++){

        let posicaoAtual = cpfParcial.charAt(i)
        let Constante = (cpfParcial.length + 1 - i)
        somatorio += Number(posicaoAtual) * Constante
    }
    let resto = somatorio % 11

    return resto < 2 ? 0 : 11 - resto
}

export const validaCPF = (inputCpf) => {
    let base = limpaCPF(inputCpf)
    
    const primeiroDigito = criaDigito(base).toString()
    const segundoDigito = criaDigito(base + primeiroDigito).toString()

    const cpfFinal = base + primeiroDigito + segundoDigito
    if(cpfFinal == inputCpf){
        return "cpf valido"
    }else{
        return "cpf Falso"
    }

}

import { criaDigito } from '../validators/validaCpf';

const geraBaseCpf = () => {
    return String(Math.floor(Math.random() * (999999999 - 1 + 1)) + 1)
}

export const geraCpf = () =>{

    const base = geraBaseCpf()

    const primeiroDigito = criaDigito(base).toString()
    const segundoDigito = criaDigito(base + primeiroDigito).toString()
    
    let cpf =  base + primeiroDigito + segundoDigito
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    return cpf

}
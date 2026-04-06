import { validaCPF } from './validators/validaCpf.js'
import { geraCpf } from './generators/geraCpf.js'
import './css/style.css'

//Carregar paginas
const conteudo = document.getElementById('content')

document.addEventListener('DOMContentLoaded', () => {
    const defaultLink = document.querySelector('.default')
    if (defaultLink) carregaPagina(defaultLink)
})

document.addEventListener('click', e =>{
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})
async function carregaPagina(el){
    try{
        const href = el.getAttribute('href')
        const response = await fetch(href)
    
        if(response.status !== 200) return
    
        const html = await response.text()
        conteudo.innerHTML = html
    } catch(e){
        console.log('ERRO AO CARREGAR A PAGINA!!')
    }
}

//interatividade dos botoes
document.addEventListener('click', e => {
    const el = e.target
    if (el.id.contains('cpfcopiar')) {
        console.log('elemento copiado')
    }
    if (el.id.contains('cpfgerar')) {
        console.log('elemento gerado')
    }
    if (el.id.contains('cpfvalidar')) {
        console.log('elemento validado')
    }
})
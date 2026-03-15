import { validaCPF } from './validators/validaCpf.js'
import { geraCpf } from './generators/geraCpf.js'
import './css/style.css'


const conteudo = document.getElementById('content')

document.addEventListener('click', e =>{
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})
async function carregaPagina(el){
    const href = el.getAttribute('href')
    const response = await fetch(href)

    if(response.status !== 200) return

    const html = await response.text()
    conteudo.innerHTML = html
}
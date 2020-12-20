const BotaoDeleta =() =>{
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('check-button')
    
    botaoDeleta.innerText='Deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (event)=>{
    const botaoDeleta = event.target
    const tarefaCompleta = botaoDeleta.parentElement //aqui pega o LI
    tarefaCompleta.remove()


    return botaoDeleta

}

export default BotaoDeleta
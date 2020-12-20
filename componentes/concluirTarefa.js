
const BotaoConclui = ()=>{
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText="Concluir"
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}


const concluirTarefa = (event) =>{
    const botaoConclui = event.target//Pega em que foi clicado
    const  tarefaCompleta = botaoConclui.parentElement //pai do elemento clicado(li)
    tarefaCompleta.classList.toggle('done')


}


export default  BotaoConclui
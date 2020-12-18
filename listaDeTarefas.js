
( () => {const criarTarefa = (event) => {
    event.preventDefault() //previne o evento de atualizar a pagina
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    tarefa.appendChild(BotaoConclui())
    
    
    input.value = ""



}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

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


}})()
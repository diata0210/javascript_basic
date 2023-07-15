
var $ = document.querySelector.bind(document);
var input = $('input');
var button = $('button');
var form = $('form');
var todos = $('.todos');

form.onsubmit = (e) => {
    e.preventDefault();
    let text = input.value.trim();
    if(text){
        addTodolist({
            text,
            status
        });
        saveTodoList();
    }
    input.value = "";
}
function addTodolist(todo){
    var li = document.createElement('li');
    li.innerHTML = 
    `<span>${todo.text}</span>
    <svg width = '16px' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>`
    if(todo.status === 'completed'){
        li.setAttribute('class','completed')
        saveTodoList();
    }
    li.onclick = () =>{
        li.classList.toggle('completed');
        saveTodoList();
    }
    todos.appendChild(li);
}
function saveTodoList(){
    let todolist = document.querySelectorAll('li'); 
    let todoS = []
    todolist.forEach( item => {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');
        todoS.push({
                text,
                status
            })
    })
    localStorage.setItem('todolist', JSON.stringify(todoS))
}
function init(){
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(item => {
        addTodolist(item);
    })
}
init();

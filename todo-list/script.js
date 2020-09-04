const add = document.querySelector('#add');
const todoList = document.querySelector('#todos');
const deleteAll = document.querySelector('#deleteAll')
const search = document.querySelector('#search input')

const getHtmlContent = todo => {
    let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <p class="mb-0">${todo}</p>
        <i class="fas fa-trash delete"></i>
    </li>`;
    todoList.innerHTML += html;
}

add.addEventListener('submit', e => {
    e.preventDefault();
    const todo = add.addTodo.value.trim();
    
    if(todo.length){
        getHtmlContent(todo);
        add.reset();
    }
})

todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

deleteAll.addEventListener('click', () => {
    todoList.innerHTML = "";
})

let searchForItem = inputVal => {
    itemsArray = Array.from(todoList.children);
    itemsArray
        .filter(item => !item.textContent.toLowerCase().includes(inputVal))
        .forEach(todo => todo.classList.add('filter'));

    itemsArray
    .filter(item => item.textContent.toLowerCase().includes(inputVal))
    .forEach(todo => todo.classList.remove('filter'));
}

search.addEventListener('keyup', e => {
    const inputVal = search.value.trim();
    searchForItem(inputVal.toLowerCase());
})
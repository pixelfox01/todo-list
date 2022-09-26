//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteAndCheck)

//Functions
function addTodo(e) {
    //prevent form from submitting
    e.preventDefault()

    if (todoInput.value === '') return

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    const completeButton = document.createElement('button')
    completeButton.classList.add('complete-btn')
    const completeIcon = document.createElement('i')
    completeIcon.classList.add('fas', 'fa-check')
    completeButton.appendChild(completeIcon)
    todoDiv.appendChild(completeButton)

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-btn')
    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('fas', 'fa-trash')
    deleteButton.appendChild(deleteIcon)
    todoDiv.appendChild(deleteButton)

    todoInput.value = ''

    todoList.appendChild(todoDiv)
}

function deleteAndCheck(e) {
    const item = e.target
    const todo = item.parentElement;
    if (item.classList.contains('delete-btn')) {
        todo.remove()
    } else if (item.classList.contains('complete-btn')) {
        todo.classList.toggle('completed')
    }
}
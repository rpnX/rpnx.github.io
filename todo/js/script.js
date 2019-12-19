function createTodoItem(title){
    const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.className = 'checkbox';

const label = document.createElement('label');
label.innerText = title;
label.className = 'title';

const editInput = document.createElement('input');
editInput.title = 'text';
editInput.className = 'textfield';

const editButton = document.createElement('button');
editInput.innerText = 'Edit';
editInput.className = 'edit';

const editButton = document.createElement('button');
editInput.innerText = 'Delete';
editInput.className = 'delete';

};


function addTodoItem(event) {
    event.preventDefault();

if (addInput.value == '') return alert('Input u item!! ');

const listItem = createTodoItem(addInput.value);

}



const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('sumbit', addTodoItem);



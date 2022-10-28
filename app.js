let addItemForm = document.querySelector('form');
let items = document.querySelector('li');

const handleSubmitForm = (e) => {
    e.preventDefault();
    let addItemInput = document.querySelector('#addItemInput').value;
    if (addItemInput != ''){
        addTodo(addItemInput);
    }
    addItemInput.value = '';
    addItemForm.reset()
};

addItemForm.addEventListener('submit',handleSubmitForm);

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    
    let bgColor = "#32ae85"
    li.addEventListener('click',(e) => {
        li.style.color = bgColor
        let button = li.childNodes[1]
        button.style.backgroundColor = bgColor
        console.log(li.childNodes)
        setTimeout(()=>li.style.textDecoration = 'line-through',350)
    })

    li.innerHTML = `
    <button></button>
    <span>${todo}</span>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
    console.log(items)
};

console.log(items)
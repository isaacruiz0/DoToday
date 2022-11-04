let addItemForm = document.querySelector('form');
let clearItems = document.querySelector('.clearFinishedTasks');


console.log(clearItems)

const handleClearItems = () => {
    // This grabs all the items we will be looping through
    let items = document.querySelector('li');
    console.log(items)
}
// This will remove all items that have been completed
clearItems.addEventListener('click',handleClearItems)

function addTodo(todo) {
    // Grabs ul to append li to
    let ul = document.querySelector('ul');
    // creates a new li to append to ul
    let li = document.createElement('li');
    
    // This is setting the value of of a future css background color value
    let bgColor = "#32ae85"
    li.addEventListener('click',(e) => {
        // Sets color in css
        li.style.color = bgColor

        // This grabs the bullet point button
        let button = li.childNodes[1]
        // This sets the the button to the greenish color once it is clicked  
        button.style.backgroundColor = bgColor
        setTimeout(()=>li.style.textDecoration = 'line-through',350)
    })

    // This adds more html details to the li when it is created
    li.innerHTML = `
    <button></button>
    <span>${todo}</span>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
};


// This will handle what happens after text is submitted
const handleSubmitForm = (e) => {
    e.preventDefault();
    // This gets the value of the input
    let addItemInput = document.querySelector('#addItemInput').value;
    // If the input is not blank then it will be added and displayed
    if (addItemInput !== ''){
        addTodo(addItemInput);
    }
    // This resets the input to blank when after submitted
    addItemForm.reset()
};

addItemForm.addEventListener('submit',handleSubmitForm);
let addItemForm = document.querySelector('form');
let clearItems = document.querySelector('.clearFinishedTasks');


console.log(clearItems)

const handleClearItems = () => {
    // This grabs all the items we will be looping through
    let liItems = document.querySelectorAll('li')

    for (let i = 0; i < liItems.length; i++){
        if (liItems[i].style.textDecoration === "line-through"){
            liItems[i].remove()
        }
    }
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
    // This capitalizes the first letter of thes sentences before appending it the list
    const firstLetter = addItemInput.charAt(0).toUpperCase();
    const afterFirstLetter = addItemInput.substring(1)
    const inputCapitalLetter = firstLetter + afterFirstLetter
    // If the input is not blank then it will be added and displayed
    if (inputCapitalLetter !== ''){
        addTodo(inputCapitalLetter);
    }
    // This resets the input to blank when after submitted
    addItemForm.reset()
};

addItemForm.addEventListener('submit',handleSubmitForm);
let addBtn = document.querySelector('.addbtn');
let inputData = document.querySelector('.input');
let list = document.querySelector('#list');
let errorText = document.querySelector('.error');
let i = 1;

// Add item to list when enter key is pressed
inputData.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addList();
    }
});

// Add item to list when add button is clicked
addBtn.addEventListener('click', addList);

// Function to add item to list
function addList(e) {
    if (inputData.value === '') {
        errorText.innerHTML = 'Please enter a value.';
    }
    else {
        errorText.innerHTML = '';
        list.innerHTML += `
            <li class="list-item" id="list-item${i}">
                <span class="itemText" id="list-text${i}"> -> ${inputData.value}</span>
                <button type="button" class="tickbtn iconbtn" onclick="strikeList(${i})"><i class="fa-solid fa-check"></i></button>
                <button type="button" class="delbtn iconbtn" onclick="deleteList(${i})"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </li>`;
        i++;
        inputData.value = '';

    }
}

// Function to strike and italicize list item text when task is done
function strikeList(id) {
    let strikeText = document.getElementById(`list-text${id}`);
    strikeText.style.textDecoration = 'line-through';
    strikeText.style.fontStyle = 'italic';
}

// Function to delete item when task is done
function deleteList(id) {
    let deleteList = document.getElementById(`list-item${id}`);
    list.removeChild(deleteList);
}


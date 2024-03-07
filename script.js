function addToDoItem() {
    const ul = document.querySelector('.todo-items');

    let input = document.querySelector('.add-input');
    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    newLi.className = "todo-item";
    newLi.addEventListener('click', function() {
        this.remove();
    });

    ul.append(newLi);
    input.value = "";
}

const addButton = document.querySelector('.add-button');
addButton.addEventListener("click", addToDoItem);



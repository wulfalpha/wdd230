const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list') // Changed this line
button.addEventListener('click', function () {
    if (input.value !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        listItem.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            listItem.parentNode.removeChild(listItem); // Changed this line
            input.focus();
        });
        listItem.append(deleteButton);
        input.focus()
        list.appendChild(listItem);
        input.value = '';
    }
});
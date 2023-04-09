const URL = 'https://jsonplaceholder.typicode.com/users';

const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.appendChild(todoElementAnchor);
    return todoElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

const dataContainer = document.querySelector('#data-container');

fetch(URL, {
    method: 'GET'
})
    .then(response => {
        toggleLoader();
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            const userElement = createTodoElement(user.name);
            dataContainer.appendChild(userElement);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

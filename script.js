let globalId = 1;

function markAsDone(id){
    let parent = document.getElementById(id);
    parent.children[2].innerHTML = 'Done!';
    parent.children[2].style.backgroundColor = '#4CAF50';
}

function createChild(title, description, id){
    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', 'todo-item');
    let h3 = document.createElement('h3');
    h3.innerHTML = title;
    let p = document.createElement('p');
    p.innerHTML = description;
    let button = document.createElement('button');
    button.innerHTML = 'Mark as done';
    button.setAttribute('onclick', `markAsDone(${id})`);
    button.setAttribute('class', 'done-btn');
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
    return div;
}

function addToDo(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let parent = document.getElementById('todo-list');
    parent.appendChild(createChild(title, description, globalId++));
}
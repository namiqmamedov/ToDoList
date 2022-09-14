var btn_add = document.getElementById('btn_add');

btn_add.onclick = function () {
    var value = document.getElementById('input').value;
    var h3 = document.createElement('h3');
    var icon = document.createElement('i');
    var div = document.createElement('div');
    div.setAttribute('class', 'box');
    icon.setAttribute('class', 'fa-solid fa-trash')
    h3.innerHTML = value
    var todo = document.getElementById('todos');
    div.appendChild(h3)
    div.appendChild(icon)
    todo.appendChild(div)
}
var icon = document.querySelector("#todos");
icon.addEventListener(`click`, (e) => {
    var parent = e.target.parentElement;
    parent.remove()
})
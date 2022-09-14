var btn_add = document.getElementById('btn_add');

btn_add.onclick = function(){
    var value = document.getElementById('input').value;
    var h3 = document.createElement('h3');
    h3.innerHTML = value
    h3.setAttribute('class','p228')
    var todo = document.getElementById('todos');
    todo.appendChild(h3)
}
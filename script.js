const input = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

const addList = () => {
  const list = document.createElement('li');
  list.innerText = input.value;
  ol.appendChild(list);
  input.value = '';
};
addBtn.addEventListener('click', addList);

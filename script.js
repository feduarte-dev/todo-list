const input = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const li = document.querySelectorAll('li');

const addList = () => {
  const list = document.createElement('li');
  list.innerText = input.value;
  ol.appendChild(list);
  input.value = '';
};
addBtn.addEventListener('click', addList);

ol.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'gray';
});

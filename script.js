const input = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const li = document.getElementsByTagName('li');
const clearBtn = document.getElementById('apaga-tudo');
const completedBtn = document.getElementById('remover-finalizados');

const addList = () => {
  const list = document.createElement('li');
  list.innerText = input.value;
  ol.appendChild(list);
  input.value = '';
};
addBtn.addEventListener('click', addList);

ol.addEventListener('click', (event) => {
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'gray';
});

ol.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

clearBtn.addEventListener('click', () => {
  ol.innerHTML = '';
});

completedBtn.addEventListener('click', () => {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      li[index].remove();
    }
  }
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      li[index].remove();
    }
  }
});

const input = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const li = document.getElementsByTagName('li');
const clearBtn = document.getElementById('apaga-tudo');
const completedBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');
const rmvBtn = document.getElementById('remover-selecionado');
const selected = document.getElementsByClassName('selected');
const upBtn = document.getElementById('mover-cima');
const downBtn = document.getElementById('mover-baixo');
const select2 = document.getElementsByClassName('selected')[0];

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
    li[index].classList.remove('selected');
  }
  event.target.style.backgroundColor = 'gray';
  event.target.classList.add('selected');
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

// Precisei fazer dois for iguais para deletar mais de um item com a classe completo
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

saveBtn.addEventListener('click', () => {
  localStorage.setItem('list', ol.innerHTML);
});

rmvBtn.addEventListener('click', () => {
  selected[0].remove();
});

upBtn.addEventListener('click', () => {
  for (let index = 0; index < li.length; index += 1) {
    const liPai = li[index].parentNode;
    if (
      li[index].classList.contains('selected') &&
      li[index].previousElementSibling
    ) {
      liPai.insertBefore(li[index], li[index - 1]);
    }
  }
});
downBtn.addEventListener('click', () => {
 
    // const liPai = li[0].parentNode;
    // if (
    //   li[index].classList.contains('selected') &&
    //   li[index].nextElementSibling
    // ) {
      console.log(select2, selected);
      // liPai.insertBefore(select2, select2.nextElementSibling.nextElementSibling);
    // }

});


window.onload = function () {
  ol.innerHTML = localStorage.getItem('list');
};

// downBtn.addEventListener('click', () => {
//   for (let index = 0; index < li.length; index += 1) {
//     const liPai = li[index].parentNode;
//     if (
//       li[index].classList.contains('selected') &&
//       li[index].nextElementSibling
//     ) {
//       liPai.insertBefore(li[index], li[index].nextSibling.nex);
//     }
//   }
// });
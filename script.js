function drag(event) {
  event.dataTransfer.setData("card", event.target.id);
}

function over(event) {
  event.preventDefault();
}

function drop(event, id) {
  event.preventDefault();
  const target = document.getElementById(id);
  const data = event.dataTransfer.getData("card");
  const card = document.getElementById(data);
  target.appendChild(card);
  event.dataTransfer.clearData();
}

function addCard(elemento) {
  const UlId = elemento.previousElementSibling.id;
  const texto = prompt("Qual é a tarefa?");
  const board = document.getElementById(UlId);
  const template = `
  <li id="${new Date().getTime()}" draggable="true" ondragstart="drag(event)">
    <p>${texto}</p>
    <p class="remove" onclick="removeCard(this)">x</p>
  </li>
  `;
  board.innerHTML = board.innerHTML + template
}

function removeCard(elemento) {
  document.getElementById(elemento.parentElement.id).remove();
}
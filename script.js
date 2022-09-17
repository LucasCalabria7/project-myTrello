function addCard(elemento) {
    const UlId = elemento.previousElementSibling.id;
    const texto = prompt("Qual é a tarefa?");
    const board = document.getElementById(UlId);
    const template =`
<li id="${new Date().getTime()}" draggable="true" ondragstart="drag(event)">
  <p>${texto}</p>
  <p class="remove" onclick="removeCard(this)">x</p>
</li>
`
}

function removeCard(elemento) {
    document.getElementById(elemento.parentElement.id).remove();
  }

  function drag(event) {
    event.dataTransfer.setData("card", event.target.id);
  }

  function over(event) {
    prevent.default();
  }

  function drop(event, id) {
    event.preventDefault();
    const target = document.getElementById(id);
    const data = event.dataTransfer.getData("card");
    const card = document.getElementById(data);
    target.appendChild(card);
    event.dataTransfer.clearData();
  }

  function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }

  if (!isEmptyOrSpaces(elemento)) {
    board.innerHTML = board.innerHTML + template;
  }
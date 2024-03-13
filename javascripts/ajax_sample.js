let number = 0;
let data = []; // Variable para almacenar los datos recuperados
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  if (data.length === 0) { // Verificar si los datos ya se han recuperado
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        data = JSON.parse(request.responseText); // Almacenar los datos recuperados
        changeVideo(); // Llamar a la función para cambiar el video después de obtener los datos
      }
    };
    request.open("GET", "ajax.json");
    request.send();
  } else {
    changeVideo(); // Si los datos ya se han recuperado, solo cambiar el video
  }
}

function changeVideo() {
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number == 2 ? number = 0 : number++;
}

button.addEventListener('click', getData); // Agregar el evento click al botón para llamar a la función getData

window.onload = getData; // Llamar a getData cuando se carga la ventana por primera vez

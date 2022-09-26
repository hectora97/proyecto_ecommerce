const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");

    function cargarHTML(){
        user.innerHTML += localStorage.getItem("text") 
    }
    cargarHTML();
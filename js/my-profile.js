const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");
const nom = document.getElementById("nom");
const nom2 = document.getElementById("nom2");
const apell = document.getElementById("apell");
const apell2 = document.getElementById("apell2");
const mail = document.getElementById("mail");
const tel = document.getElementById("tel");

console.log(dataStorage);

    function cargarHTML(){
        user.innerHTML += dataStorage;
        mail.value = dataStorage;
    }
    cargarHTML();

    function validate() { 
    
        let forms= document.querySelectorAll('.needs-validation')
    
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                
                }else{
                    event.preventDefault() // Evita la recarga de la pagina
                    localStorage.setItem("nombre1", nom.value);
                    localStorage.setItem("nombre2", nom2.value);
                    localStorage.setItem("apellido1", apell.value);
                }
                form.classList.add('was-validated')
                
            }, false)
    });
    } 
    
    validate();

    function guardarUser(){
        const datos = {};
        
    }


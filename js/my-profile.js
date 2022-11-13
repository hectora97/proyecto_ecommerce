const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");
const nom = document.getElementById("nom");
const nom2 = document.getElementById("nom2");
const apell = document.getElementById("apell");
const apell2 = document.getElementById("apell2");
const mail = document.getElementById("mail");
const tel = document.getElementById("tel");
var alertPlaceholder = document.getElementById('liveAlertPlaceholder');

console.log(dataStorage);

    function cargarHTML(){
        user.innerHTML += dataStorage;
        mail.value = dataStorage;
        const correo = mail.value;
        if(localStorage.getItem(correo)){

            const datos1 = (JSON.parse(localStorage.getItem(correo)));

            const nom = document.getElementById("nom");
            const nom2 = document.getElementById("nom2");
            const apell = document.getElementById("apell");
            const apell2 = document.getElementById("apell2");
            const tel = document.getElementById("tel");

            console.log(datos1.nom);
            nom.value = datos1.nom;
            nom2.value = datos1.nom2;
            apell.value = datos1.apell;
            apell2.value = datos1.apell2;
            tel.value = datos1.tel;
       }
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
                alert('Falto llenar campo obligatorio.', 'danger');
                
                }else{
                    event.preventDefault() // Evita la recarga de la pagina
                    guardarUser();
                    alert('Cambios guardados!', 'success');
                }
                form.classList.add('was-validated')
                
            }, false)
    });
    } 
    
    validate();

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      
        alertPlaceholder.append(wrapper)
      }

    function guardarUser(){
        var datos = {};

        const mail = document.getElementById("mail").value;

        datos.nom = document.getElementById("nom").value;
        datos.nom2 = document.getElementById("nom2").value;
        datos.apell = document.getElementById("apell").value;
        datos.apell2 = document.getElementById("apell2").value;
        datos.tel = document.getElementById("tel").value;
        
        localStorage.setItem(mail, JSON.stringify(datos));
        console.log(mail.nom);

    }

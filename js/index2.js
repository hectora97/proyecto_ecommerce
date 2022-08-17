let formL = document.getElementById("formL");
const submit = document.getElementById('submit');

submit.addEventListener("click", function(u){

    u.preventDefault(); 
    u.preventDefault(); 

    let user = document.getElementById("exampleInputEmail1");
    let pass = document.getElementById("exampleInputPassword1");
    let aprove = false;

    if (user.value === ""){
        user.classList.add('is-invalid');
        aprove = true;
    }
    if (pass.value === ""){
        pass.classList.add('is-invalid');
        aprove = true;
    }

    if(!aprove){
        window.location.href = "main.html";
    }


});

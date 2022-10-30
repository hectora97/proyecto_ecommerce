const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");
const cont = document.getElementById("fila");
const prem = document.getElementById("prem");
const expres = document.getElementById("expres");
const stand = document.getElementById("stand");
const btn_final = document.getElementById("btn-final");
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const habilitar = () => {
    const checkTarj = document.getElementById("tarj");
    const segtar = document.getElementById("numB");
    const checkTrans = document.getElementById("transf");
    const segT = document.getElementById("segT");
    const numT = document.getElementById("numT");
    const vencT = document.getElementById("vencT");

    
    if(checkTarj.checked){
        segtar.disabled = true;
        const mostr = document.getElementById("mostr");
        mostr.innerHTML=`
        Tarjeta de Credito. <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Seleccionar</a>
        `
    }else{
        segtar.disabled = false;
    }

    if(checkTrans.checked){
        segT.disabled = true;
        numT.disabled = true;
        vencT.disabled = true;
        mostr.innerHTML=`
        Transferencia bancaria. <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Seleccionar</a>
        `
    }else{
        segT.disabled = false;
        numT.disabled = false;
        vencT.disabled = false;
    }
    
}

function validate() { 
    
    let forms= document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            alert('Falto llenar algun campo.', 'danger');
            
            }else{
                alert('¡Has comprado con éxito!.', 'success');
            }
            form.classList.add('was-validated')
            
        }, false)
});
} 

validate();

    function alert(message, type) {
        var wrapper = document.createElement('div')
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      
        alertPlaceholder.append(wrapper)
      }
    


    function cargarHTML(){
        user.innerHTML += localStorage.getItem("text") 
    }
    cargarHTML();

    const sumarT = (costoU) => {
        const cantT = document.getElementById("cant");
        const total = document.getElementById("total");
        const cost = document.getElementById("costo");
        const result = costoU * cantT.value;
        console.log(result);
        total.innerHTML =`<p id="costo1" value=${result} oninput="todoCost(${result})"> USD ${result} </p>`;
        cost.innerHTML =`
            USD ${result}
            `
    };

    const todoCost = (unitcost) => {
        const cantT = document.getElementById("cant");
        const costE = document.getElementById("costE");
        const costT = document.getElementById("costT");
        const premI = document.getElementById("premI");
        const expresI = document.getElementById("expresI");
        const standI = document.getElementById("standI");
        var result = unitcost * cantT.value;
        

        const costEnv = parseFloat(
            premI.checked
                ? premI.value
                : expresI.checked
                ? expresI.value
                : standI.value
        );

        if((premI.checked || expresI.checked || standI.checked) && cantT.value > 0){
            btn_final.disabled = false;
        }

        const final = result * (costEnv / 100);
        const costF = final + result;
        costE.innerHTML = `
            <p id="" value=${final}> USD ${final.toFixed(2)} </p>
        `
        costT.innerHTML = `
            <p id="" value=${costF}> USD ${costF.toFixed(2)} </p>
        `
        
    };
    

    function mostrarData(arr){
        console.log(arr);
        for(const item1 of arr.articles){
            cont.innerHTML = `
            <th style="width:15%;"><img src="${item1.image}" style="width:75%;"></th>
            <td>${item1.name}</td>
            <td>${item1.currency}${item1.unitCost}</td>
            <td style="width:20%;"><input type="number" style="width:30%;" min="1" id="cant" oninput="sumarT(${item1.unitCost})" required></input></td>
            <td id="total"></td>
            ` 
            prem.innerHTML=`
            
            <input class="form-check-input" value="15" type="radio" name="flexRadioDefault" id="premI" onclick="todoCost(${item1.unitCost})" required>
            <label class="form-check-label" for="flexRadioDefault2">
                Premium 2 a 5 dias (15%).
            </label>
            <div class="invalid-feedback">Example invalid feedback text</div>
            `

            expres.innerHTML=`
            <input class="form-check-input" value="7" type="radio" name="flexRadioDefault" id="expresI"  onclick="todoCost(${item1.unitCost})" required>
            <label class="form-check-label" for="flexRadioDefault1">
            Express 5 a 8 dias (7%). 
            </label>
            <div class="invalid-feedback">Example invalid feedback text</div>
            `
            stand.innerHTML=`
            <input class="form-check-input" value="5" type="radio" name="flexRadioDefault" id="standI"  onclick="todoCost(${item1.unitCost})" required>
            <label class="form-check-label" for="flexRadioDefault1">
            Standar 12 a 15 dias (5%). 
            </label>
            <div class="invalid-feedback">Example invalid feedback text</div>
            `
        }
        
    }

    async function loadData(){
        let response = await fetch(carrito1);
        let json = await response.json();
        mostrarData(json);
    }
    loadData();
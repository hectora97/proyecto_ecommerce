const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");
const cont = document.getElementById("fila");
const prem = document.getElementById("prem");
const expres = document.getElementById("expres");
const stand = document.getElementById("stand");


    function cargarHTML(){
        user.innerHTML += localStorage.getItem("text") 
    }
    cargarHTML();

    const sumarT = (costoU) => {
        const cantT = document.getElementById("cant");
        const total = document.getElementById("total");
        const cost = document.getElementById("costo");
        var result = costoU * cantT.value;
        console.log(result);
        total.innerHTML =`<p id="costo1" value=${result}> USD${result} </p>`;
        cost.innerHTML =`
            ${result}
            `
    };

    const todoCost = (unitcost) => {
        const costE = document.getElementById("costE");
        const premI = document.getElementById("premI");
        const expresI = document.getElementById("expresI");
        const standI = document.getElementById("standI");
        const costEnv = parseFloat(
            premI.checked
                ? premI.value
                : expresI.checked
                ? expresI.value
                : standI.value
        );
        const final = unitcost * (costEnv / 100);
        costE.innerHTML = `
            <p id="" value=${final}> USD${final} </p>
        `
        console.log(final);
    };

    function mostrarData(arr){
        console.log(arr);
        for(const item1 of arr.articles){
            cont.innerHTML = `
            <th style="width:15%;"><img src="${item1.image}" style="width:75%;"></th>
            <td>${item1.name}</td>
            <td>${item1.currency}${item1.unitCost}</td>
            <td style="width:20%;"><input type="number" style="width:30%;" id="cant" oninput="sumarT(${item1.unitCost})"></input></td>
            <td id="total"></td>
            ` 
            prem.innerHTML=`
            <input class="form-check-input" value="15" type="radio" name="flexRadioDefault" id="premI" checked onclick="todoCost(${item1.unitCost})">
            <label class="form-check-label" for="flexRadioDefault2">
                Premium 2 a 5 dias (15%).
            </label>
            `

            expres.innerHTML=`
            <input class="form-check-input" value="7" type="radio" name="flexRadioDefault" id="expresI"  onclick="todoCost(${item1.unitCost})">
            <label class="form-check-label" for="flexRadioDefault1">
            Express 5 a 8 dias (7%). 
            </label>
            `
            stand.innerHTML=`
            <input class="form-check-input" value="5" type="radio" name="flexRadioDefault" id="standI"  onclick="todoCost(${item1.unitCost})">
            <label class="form-check-label" for="flexRadioDefault1">
            Standar 12 a 15 dias (5%). 
            </label>
            `
        }
        
    }

    async function loadData(){
        let response = await fetch(carrito1);
        let json = await response.json();
        mostrarData(json);
    }
    loadData();
const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");
const cont = document.getElementById("fila");

    function cargarHTML(){
        user.innerHTML += localStorage.getItem("text") 
    }
    cargarHTML();

    const sumarT = (costoU) => {
        const cantT = document.getElementById("cant");
        const total = document.getElementById("total");
        const result = costoU * cantT.value;
        console.log(result);
        total.innerHTML =`<p>USD${result}</p>`;
    }

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
        }
        
    }

    async function loadData(){
        let response = await fetch(carrito1);
        let json = await response.json();
        mostrarData(json);
    }
    loadData();
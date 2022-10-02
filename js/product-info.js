const container2 = document.getElementById("cat-list-container");
const container3 = document.getElementById("container3");
const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");

    function cargarHTML(){
        user.innerHTML += localStorage.getItem("text") 
    }
    cargarHTML();

    function setProID2(id) {
        localStorage.setItem("proID", id);
        window.location = "product-info.html"
      }


function mostrarDatos(data,data2) {
    const [images1, images2, images3, images4] = data.images; 
            container2.innerHTML = `
              <div class="container" style="width:80%;margin-top:3%;">
                  <div class="row">
                      <div class="col">
                          <div class="d-flex w-500 justify-content-between">
                              <h1 class="mb-1">${data.name}</h1>
                          </div>
                          <hr>
                          <h5><b>Costo</b></h5>
                          <p class="mb-1">${data.cost}</p>
                          <h5><b>Descripción</b></h5>
                          <p class="mb-1">${data.description}</p>
                          <h5><b>Categoria</b></h5>
                          <p class="mb-1">${data.category}</p>
                          <h5><b>Stock</b></h5>
                          <p class="mb-1">${data.soldCount} artículos</p>
                          <h5 style="margin-bottom:2%;"><b>Imagenes ilustrativas</b></h5>
                      </div>
                  </div>
              </div>

            <div id="carouselExampleCaptions" class="container carousel slide" data-bs-ride="carousel" style="width:70%">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="${images1}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1><b>${data.name}</b></h1>
                            <h3>${data.description}</h3>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${images2}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1><b>${data.name}</b></h1>
                            <h3>${data.description}</b></h3>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${images3}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1><b>${data.name}</b></h1>
                            <h3>${data.description}</h3>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src="${images4}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1><b>${data.name}</b></h1>
                            <h3>${data.description}</h3>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span style="background-color:grey;" class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span style="background-color:grey;" class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span style="background-color:grey;" class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span style="background-color:grey;" class="visually-hidden">Siguiente</span>
                    </button>
                    </div>
                    <div class="container d-flex w-500 justify-content-between">
                        <h1 class="mb-1" style="margin-top:3%;">Comentarios</h1>
                    </div>
                    
                    `

            for (const item of data2) { 
                container2.innerHTML +=
                
                   `
                   <div class="container list-group-item list-group-item-action cursor-active" style="z-index: 10;">
                    <div class="row" style="z-index: 10;">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1" id="estrellas" style="position:relative; margin-right:50px;"><b>${item.user}</b> ${item.dateTime}    
                                    
                                </h4>
                            </div>
                            <p class="mb-1">${item.description}</p>
                        </div>
                    </div>
                </div>

              `
              for (i = 0; i < 5; i++){

                    if(i >= item.score){
                        container2.innerHTML += `<div class="estrellas" style=" display: inline; margin-left:43%; margin-right:-550px;"><span class="fa fa-star align-middle mb-1" style="position:relative; margin-top:-10%; z-index: 1000;align-items:center"></span> </div>`
                        
                    }else{
                        container2.innerHTML += `<div style=" display: inline; margin-left:43%; margin-right:-550px;">
                        <span class="fa fa-star checked align-middle mb-1" style="position:relative; margin-top:-10%; z-index: 1000;align-items:center">
                        </span>
                        </div>`
                    }
            }
        }   
  }

function  mostrarDatosRelacionado(data3,data4){
    const [img1] = data3.images; 
    const [imge2] = data4.images; 
    container3.innerHTML += `
    <h1 class="mb-1" style="margin-top:3%;">Productos relacionados</h1>

    
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" onclick="setProID2(${data3.id})" >
            <div class="card cursor-active">
            <img src="${img1}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data3.name}</h5>
            </div>
            </div>
        </div>
        <div class="col" onclick="setProID2(${data4.id})">
            <div class="card cursor-active">
            <img src="${imge2}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data4.name}</h5>
            </div>
            </div>
        </div>
        </div>
    `;

  }


async function loadData(){
    
    
    /*if (response3.status === "ok") {
        let json3 = await response3.json();
        mostrarDatos(json,json2);
        mostrarDatosRelacionado(json3);
      }else{
        
        let json3 = await response3.json();
        mostrarDatos(json,json2);
        mostrarDatosRelacionado(json3);
      }*/
}

loadData();

async function verificarURL(){
   
    let response = await fetch(LINK_INFO_PRODUCTOS);
    let response2 = await fetch(LINK_COM_PRO);
    let json = await response.json();
    let json2 = await response2.json();
    let respo = await fetch(LINK_PRODUCTOS);
    let jsonp = await respo.json();
    const [id] = jsonp.products;
    /*const [id2] = json.products;*/
    console.log(id.id);
    var mostrar1 = parseFloat(IDP) + 1;
    var mostrar2 = parseFloat(IDP) + 2;
    console.log(mostrar1);
    const last = jsonp.products[jsonp.products.length-1];
    const last2 = jsonp.products[jsonp.products.length-2];
    console.log(last.id);

    if(json.id == last2.id){
        var LINK_INFO_PRODUCTOS1 = PRODUCT_INFO_URL + mostrar1 + EXT_TYPE;
        let response3 = await fetch(LINK_INFO_PRODUCTOS1);
        let json3 = await response3.json();
        var mostrar2 = parseFloat(IDP) - 1;
        var LINK_INFO_PRODUCTOS2 = PRODUCT_INFO_URL + mostrar2 + EXT_TYPE;
        let response4 = await fetch(LINK_INFO_PRODUCTOS2);
        let json4 = await response4.json();
        mostrarDatos(json,json2);
        mostrarDatosRelacionado(json3,json4);
        console.log(LINK_INFO_PRODUCTOS2);
    }
    
        if(mostrar1 > last.id){
            var mostrar1 = parseFloat(IDP) - 1;
            var LINK_INFO_PRODUCTOS1 = PRODUCT_INFO_URL + mostrar1 + EXT_TYPE;
            let response3 = await fetch(LINK_INFO_PRODUCTOS1);
            let json3 = await response3.json();
            var mostrar2 = parseFloat(IDP) - 4;
            var LINK_INFO_PRODUCTOS2 = PRODUCT_INFO_URL + mostrar2 + EXT_TYPE;
            let response4 = await fetch(LINK_INFO_PRODUCTOS2);
            let json4 = await response4.json();
            mostrarDatos(json,json2);
            mostrarDatosRelacionado(json3,json4);
        }else if(mostrar1 > id.id){
            var LINK_INFO_PRODUCTOS1 = PRODUCT_INFO_URL + mostrar1 + EXT_TYPE;
            let response3 = await fetch(LINK_INFO_PRODUCTOS1);
            let json3 = await response3.json();
            var mostrar2 = parseFloat(IDP) + 2;
            var LINK_INFO_PRODUCTOS2 = PRODUCT_INFO_URL + mostrar2 + EXT_TYPE;
            let response4 = await fetch(LINK_INFO_PRODUCTOS2);
            let json4 = await response4.json();
            mostrarDatos(json,json2);
            mostrarDatosRelacionado(json3,json4);
            console.log(LINK_INFO_PRODUCTOS2);

        }

    /*for(a = 0; a < jsonp.products.length; a++){
        var mostrar1 = parseFloat(IDP) + 1;
        var LINK_INFO_PRODUCTOS1 = PRODUCT_INFO_URL + mostrar1 + EXT_TYPE;
        let response3 = await fetch(LINK_INFO_PRODUCTOS1);
        let json3 = await response3.json();
        mostrarDatos(json,json2);
        mostrarDatosRelacionado(json3);
    }*/
  }
  verificarURL();
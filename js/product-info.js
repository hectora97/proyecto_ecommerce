const container2 = document.getElementById("cat-list-container");

function mostrarDatos(data, data2) {
    const [images1, images2, images3, images4] = data.images; 
            container2.innerHTML = `
              <div onclick="setProID(${data.id})" class="container" style="width:80%;margin-top:3%;">
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
                   <div onclick="setProID(${item.id})" class="container list-group-item list-group-item-action cursor-active" style="z-index: 10;">
                    <div class="row" style="z-index: 10;">
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1" id="estrellas"><b>${item.user}</b> ${item.dateTime}
                                    
                                </h4>
                            </div>
                            <p class="mb-1">${item.description}</p>
                        </div>
                    </div>
                </div>
              `
              for (i = 0; i < item.score; i++){
                container2.innerHTML += `<div style=" display: inline; margin-left:40%; margin-right:-520px;">
                <span class="fa fa-star checked align-middle mb-1" style="position:relative; margin-top:-10%; z-index: 1000;align-items:center">
                </span>
                </div>`
            }
        }      
  }

async function loadData(){
    let response = await fetch(LINK_INFO_PRODUCTOS);
    let response2 = await fetch(LINK_COM_PRO);
    let json = await response.json();
    let json2 = await response2.json();
    mostrarDatos(json,json2);
}

loadData();
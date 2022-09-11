const container2 = document.getElementById("container1");

function mostrarDatos(data) {
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

              `
  }

async function loadData(){
    let response = await fetch(LINK_INFO_PRODUCTOS);
    let json = await response.json();
    console.log(json);
    mostrarDatos(json);
}

loadData();
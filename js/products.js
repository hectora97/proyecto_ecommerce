const container = document.getElementById("cat-list-container");
const ORDER_ASC_BY_PRECIO = "";
const ORDER_DESC_BY_PRECIO = "";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

function setProID(id) {
  localStorage.setItem("proID", id);
  window.location = "product-info.html"
}


function showData(dataArray) {
  
  for (const item of dataArray) {
    
    container.innerHTML += `
            <div onclick="setProID(${item.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${item.image}" alt="${item.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${item.name} - ${item.currency} ${item.cost} </h4>
                            <small class="text-muted">${item.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${item.description}</p>
                    </div>
                </div>
            </div>
            `
  }
}

function sortPrecio(datarray){
  datarray.sort(function(a, b) {
    if(a.cost < b.cost) {
      return -1;
    }
    if(a.cost > b.cost) {
      return 1;
    }
    return 0;
    })
    .forEach((value) => {
      container.innerHTML += `
            <div onclick="setProID(${value.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${value.image}" alt="${value.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${value.name} - ${value.currency} ${value.cost} </h4>
                            <small class="text-muted">${value.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${value.description}</p>
                    </div>
                </div>
            </div>
            `
    });
  }

  function sortPrecioDesc(datarray){
    datarray.sort(function(a, b) {
      if(a.cost < b.cost) {
        return 1;
      }
      if(a.cost > b.cost) {
        return -1;
      }
      return 0;
      })
      .forEach((value) => {
        container.innerHTML += `
              <div onclick="setProID(${value.id})" class="list-group-item list-group-item-action cursor-active">
                  <div class="row">
                      <div class="col-3">
                          <img src="${value.image}" alt="${value.description}" class="img-thumbnail">
                      </div>
                      <div class="col">
                          <div class="d-flex w-100 justify-content-between">
                              <h4 class="mb-1">${value.name} - ${value.currency} ${value.cost} </h4>
                              <small class="text-muted">${value.soldCount} artículos</small>
                          </div>
                          <p class="mb-1">${value.description}</p>
                      </div>
                  </div>
              </div>
              `
      });
    }

    function sortCantVend(datarray){
      datarray.sort(function(a, b) {
        if(a.soldCount < b.soldCount) {
          return 1;
        }
        if(a.soldCount > b.soldCount) {
          return -1;
        }
        return 0;
        })
        .forEach((value) => {
          container.innerHTML += `
                <div onclick="setProID(${value.id})" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${value.image}" alt="${value.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${value.name} - ${value.currency} ${value.cost} </h4>
                                <small class="text-muted">${value.soldCount} artículos</small>
                            </div>
                            <p class="mb-1">${value.description}</p>
                        </div>
                    </div>
                </div>
                `
        });
    }

    function showCategoriesList(datarray){

      for (const item2 of datarray) {
          if (((minCount == undefined) || (minCount != undefined && parseInt(item2.cost) >= minCount)) &&
              ((maxCount == undefined) || (maxCount != undefined && parseInt(item2.cost) <= maxCount))){
  
              container.innerHTML += `
              <div onclick="setProID(${item2.id})" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${item2.image}" alt="${item2.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${item2.name} - ${item2.currency} ${item2.cost} </h4>
                                <small class="text-muted">${item2.soldCount} artículos</small>
                            </div>
                            <p class="mb-1">${item2.description}</p>
                        </div>
                    </div>
                </div>
              `
          }
  
      }
  }


  async function loadData(){
    let response = await fetch(LINK_PRODUCTOS);
    let json = await response.json();
    showData(json.products);
    
    document.getElementById("sortAsc").addEventListener("click", function(){
      container.innerHTML="";
      sortPrecio(json.products);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
      container.innerHTML="";
      sortPrecioDesc(json.products);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
      container.innerHTML="";
      sortCantVend(json.products);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
      container.innerHTML="";
      document.getElementById("rangeFilterCountMin").value = "";
      document.getElementById("rangeFilterCountMax").value = "";

      minCount = undefined;
      maxCount = undefined;

      showCategoriesList(json.products);
  });

  document.getElementById("rangeFilterCount").addEventListener("click", function(){
    
    container.innerHTML="";
    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
        minCount = parseInt(minCount);
    }
    else{
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
        maxCount = parseInt(maxCount);
    }
    else{
        maxCount = undefined;
    }

    showCategoriesList(json.products);
});


  }
  
  loadData();

const user = document.getElementById("username");
const dataStorage = localStorage.getItem("text");

    function cargarHTML(){
        user.innerHTML += localStorage.getItem("text")
    }
    cargarHTML();






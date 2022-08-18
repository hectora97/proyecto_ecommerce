const container = document.getElementById("container");

function showData(dataArray) {
  let htmlContentToAppend2 = "";
  
  for (const item of dataArray) {
    
    container.innerHTML += `
            <div onclick="setCatID(${item.id})" class="list-group-item list-group-item-action cursor-active">
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
  async function loadData(){
    let response = await fetch(PRODUCTS_AUTOS);
    let json = await response.json();
    showData(json.products);
  }
  
  loadData();





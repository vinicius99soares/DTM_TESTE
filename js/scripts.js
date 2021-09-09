const urlCarros = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;
const carsSelection = document.getElementById("carsOptions");
const urlMotorcycles = `https://parallelum.com.br/fipe/api/v1/motos/marcas`;
const motorcyclesSelection = document.getElementById("motorcyclesOptions");
const urlTrucks = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas`;
const truckSelection = document.getElementById("trucksOptions");

fetch(urlCarros)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.map((data) => {
            const carBrand = document.createElement("div");
            carBrand.className = 'selectionText';
            carBrand.setAttribute("onclick", `brandDetails('${data.nome}', '${data.codigo}', 'carros')`)
            carBrand.innerHTML = data.nome;
            carBrand.value = data.codigo;
            carsSelection.appendChild(carBrand);
        });
    });

fetch(urlMotorcycles)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.map((data) => {
            const motosBrand = document.createElement("option");
            motosBrand.innerHTML = data.nome;
            motosBrand.className = 'selectionText';
            motosBrand.setAttribute("onclick", `brandDetails('${data.nome}', '${data.codigo}', 'motos')`)
            motosBrand.value = data.codigo;
            motorcyclesSelection.appendChild(motosBrand);
        });
    });

fetch(urlTrucks)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.map((data) => {
            const caminhoesBrand = document.createElement("option");
            caminhoesBrand.innerHTML = data.nome;
            caminhoesBrand.className = 'selectionText';
            caminhoesBrand.setAttribute("onclick", `brandDetails('${data.nome}', '${data.codigo}', 'caminhoes')`)
            caminhoesBrand.value = data.codigo;
            truckSelection.appendChild(caminhoesBrand);
        });
    });

function brandDetails(brandName, brandCode, type) {
  console.log(brandCode);
  console.log(type);
  const modelsDiv = document.getElementById("modelsDiv");
  document.getElementById(`modelSelector`).style.display='none';

  while (modelsDiv.lastElementChild) {
    modelsDiv.removeChild(modelsDiv.lastElementChild);
  }

  const urlDetails = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brandCode}/modelos`;
    fetch(urlDetails)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.modelos.map((data) => {
                const eachModel = document.createElement("div");
                eachModel.className = 'modelSelect';
                eachModel.innerHTML = data.nome;
                modelsDiv.appendChild(eachModel);
            });
              document.getElementById(`modelSelector`).style.display='flex';
              document.getElementById(`brandName`).innerText=`${brandName}`;
        });
}    

function carDetails(value) {
    console.log(value);
    const urlDetailsCar = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${value}/modelos`;
    const carSelection = document.getElementById("carDetails");
    fetch(urlDetailsCar)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.modelos.map((data) => {
                const carDetails = document.createElement("div");
                carDetails.innerHTML = data.nome;
                carSelection.appendChild(carDetails);
            });
        });
}

function motoDetails(value) {
    console.log(value);
    const urlDetailsMoto = `https://parallelum.com.br/fipe/api/v1/motos/marcas/${value}/modelos`;
    const motoSelection = document.getElementById("motoDetails");
    fetch(urlDetailsMoto)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.modelos.map((data) => {
                const motoDetails = document.createElement("div");
                motoDetails.innerHTML = data.nome;
                motoSelection.appendChild(motoDetails);
            });
        });
}

function caminhaoDetails(value) {
    console.log(value);
    const urlDetailsCaminhao = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${value}/modelos`;
    const caminhaoSelection = document.getElementById("caminhaoDetails");
    fetch(urlDetailsCaminhao)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            data.modelos.map((data) => {
                const caminhaoDetails = document.createElement("div");
                caminhaoDetails.innerHTML = data.nome;
                caminhaoSelection.appendChild(caminhaoDetails);
            });
        });
}

function showSelection(selectionName, arrowName) {
  console.log(selectionName);
  if(document.getElementById(`${selectionName}`).style.display != "block") {
    console.log('Morra')
    document.getElementById(`${selectionName}`).style.display='block';
    document.getElementById(`${arrowName}`).style.transform='rotate(0deg)';
  } else {
    console.log('escondendo')
    document.getElementById(`${selectionName}`).style.display='none';
    document.getElementById(`${arrowName}`).style.transform='rotate(-180deg)';
  }
}

function hiddenModelSelection() {
  console.log('1')
  document.getElementById(`modelSelector`).style.display='none';
}
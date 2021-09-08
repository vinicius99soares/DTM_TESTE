/*!
* Start Bootstrap - Landing Page v6.0.3 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const urlCarros = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;
const carsSelection=document.getElementById('cars');
const urlMotos = `https://parallelum.com.br/fipe/api/v1/motos/marcas`;
const motosSelection=document.getElementById('motos');
const urlCaminhoes = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas`;
const caminhoesSelection=document.getElementById('caminhoes');


fetch(urlCarros).then(response =>{
  return response.json();
    }).then(data =>{
      console.log(data)
      data.map((data)=>{
        const carBrand = document.createElement('option');
        carBrand.innerHTML = data.nome
        carBrand.value = data.codigo
        carsSelection.appendChild(carBrand)
       
      })
    }
    )
    fetch(urlMotos).then(response =>{
      return response.json();
        }).then(data =>{
          console.log(data)
          data.map((data)=>{
            const motosBrand = document.createElement('option');
            motosBrand.innerHTML = data.nome
            motosBrand.value = data.codigo
            motosSelection.appendChild(motosBrand)
           
          })
        }
        )
        fetch(urlCaminhoes).then(response =>{
          return response.json();
            }).then(data =>{
              console.log(data)
              data.map((data)=>{
                const caminhoesBrand = document.createElement('option');
                caminhoesBrand.innerHTML = data.nome
                caminhoesBrand.value = data.codigo
                caminhoesSelection.appendChild(caminhoesBrand)
               
              })
            }
            )
            function carDetails(value){
              console.log(value)
              const urlDetailsCar = `https://parallelum.com.br/fipe/api/v1/carros/marcas/${value}/modelos`;
              const carSelection=document.getElementById('carDetails');
              fetch(urlDetailsCar).then(response =>{
                return response.json();
                  }).then(data =>{
                    console.log(data)
                    data.modelos.map((data)=>{
                      const carDetails = document.createElement('div');
                      carDetails.innerHTML = data.nome
                      carSelection.appendChild(carDetails)
                     
                    })
                  }
                  )

            }

            function motoDetails(value){
              console.log(value)
              const urlDetailsMoto = `https://parallelum.com.br/fipe/api/v1/motos/marcas/${value}/modelos`;
              const motoSelection=document.getElementById('motoDetails');
              fetch(urlDetailsMoto).then(response =>{
                return response.json();
                  }).then(data =>{
                    console.log(data)
                    data.modelos.map((data)=>{
                      const motoDetails = document.createElement('div');
                      motoDetails.innerHTML = data.nome
                      motoSelection.appendChild(motoDetails)
                     
                    })
                  }
                  )

            }

            function caminhaoDetails(value){
              console.log(value)
              const urlDetailsCaminhao = `https://parallelum.com.br/fipe/api/v1/caminhoes/marcas/${value}/modelos`;
              const caminhaoSelection=document.getElementById('caminhaoDetails');
              fetch(urlDetailsCaminhao).then(response =>{
                return response.json();
                  }).then(data =>{
                    console.log(data)
                    data.modelos.map((data)=>{
                      const caminhaoDetails = document.createElement('div');
                      caminhaoDetails.innerHTML = data.nome
                      caminhaoSelection.appendChild(caminhaoDetails)
                     
                    })
                  }
                  )

            }





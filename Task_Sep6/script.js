fetch("https://restcountries.eu/rest/v2/all")
.then (function(response){
    return response.json();
})
.then (function(data){
  console.log(data);
  var temp="";
for(var i=1;i<250;i=i+3){

    temp=temp+
    `<div class="row">`;
    for(var j=0;j<3;j++){
      temp=temp+`<div class="col-sm-4">
      <div class="row">
          <div class="col-lg-12">
              <div class="card">
                  <div class="card-header" style="background-color:black">
                      <p class="name">${data[i+j-1].name}
                      </p>
                  </div>
                  <div class="card-body">
                      <img class="card-img-top" src="${data[i+j-1].flag}" style="width:50%">
                      <p class="Capital">Capital:${data[i+j-1].capital}</p>
                      <p class="Region">Region:${data[i+j-1].region}</p>
                      <p class="Country_code">Country Code:${data[i+j-1].cioc}</p>
                      <a href="#" class="btn " onclick="Weather
                      ('${data[i+j-1].latlng[0]}','${data[i+j-1].latlng[1]}')">Click for weather</a>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
    }
    temp=temp+`</div>`
}
temp=temp+'</div>'

document.getElementById('country-cards').innerHTML=temp;
})
.catch(function(error){
   console.log(error);
})

function Weather(lat,lon){
    console.log('called',lat,lon);
fetch(`https://api.openweathermap.org/data/
2.5/weather?lat=${lat}&lon=${lon}
&appid=5d80bbdeecc56bf0f269c9cd70af0028`)
.then (function(response){
    return response.json();
})
.then (function(data){
    console.log(data);
 alert(`Weather Details
 Humidity : ${data.main.humidity},
 Pressure:${data.main.pressure},
 Temp :${data.main.temp},
 maximum temperature :${data.main.temp_max},
 minimum tempearture : ${data.main.temp_min}`);
})
}
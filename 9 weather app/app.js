var search = document.querySelector(".search");
var city = document.querySelector(".city");

var country = document.querySelector(".country");

var value = document.querySelector(".value");
var shortDesc = document.querySelector(".short-desc");
var visibility = document.querySelector(".visibility span");
var wind = document.querySelector(".wind span");
var sun = document.querySelector(".sun span");
// var value = document.querySelector('value')
var time = document.querySelector(".time");
var sup = document.querySelector("sup");
var content = document.querySelector(".content");
var body = document.querySelector("body");


async function changeWeatherUI(capitalSearch) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  let data = await fetch(apiURL).then((res) => res.json());
  if (data.cod == 200) {
    content.classList.remove('hide');

    console.log(data);
    city.innerText = data.name;
    console.log(data.name);
    country.innerText = data.sys.country;
    console.log(data.sys.country);
    visibility.innerText = data.visibility + "m";
    wind.innerText = data.wind.speed + "m/s";
    sun.innerText = data.main.humidity + "%";
    value.innerText = Math.round(data.main.temp);
    let temp = Math.round(data.main.temp);

    shortDesc.innerText = data.weather[0] ? data.weather[0].main : "";
    time.innerText = new Date().toLocaleString("vi");
    if(temp < 20)
        body.setAttribute('class','cold');
    else    
        body.setAttribute('class','hot');
  } else {
    content.classList.add('hide');
  }
}
search.addEventListener('keydown', e => {
    if(e.code === "Enter"){
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})
changeWeatherUI('Ha Noi');

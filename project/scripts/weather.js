// select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const report = document.querySelector('#weather-report');
const forecast = document.querySelector('#forecast');

const lat="14.3372"
const lon="120.8533"
const key="2ed35afebf26a75b72e060b3991275f8"

//const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

// convert a uniix time stamp to normal time
  function unixtime(x) {
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    const date = new Date(x * 1000);

    // Hours part from the timestamp
    let hours = date.getHours();
    if (hours>12) {hours=hours-12}

    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    const formattedTime = `${hours}:${minutes.substring(minutes.length - 2)}`;
    return formattedTime
  
}



  function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].main;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const city=document.createElement('p')
    city.innerHTML = `City: ${data.city.name}`
    report.appendChild(city)

    const temp=document.createElement('p')
    temp.innerHTML = `${data.list[0].main.temp}&deg;F`
    report.appendChild(temp)
 
    const description=document.createElement('p')
    description.innerHTML = data.list[0].weather[0].description;
    report.appendChild(description)

    const high=document.createElement('p')
    high.innerHTML = `High: ${data.list[0].main.temp_max}&deg;F`
    report.appendChild(high)

    const low=document.createElement('p')
    low.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;F`
    report.appendChild(low)

    const humidity=document.createElement('p')
    humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`
    report.appendChild(humidity)

    const sunrise=document.createElement('p')
    sunrise.innerHTML = `Sunrise: ${unixtime(data.city.sunrise)}am`
    report.appendChild(sunrise)

    const sunset=document.createElement('p')
    sunset.innerHTML = `Sunset: ${unixtime(data.city.sunset)}pm`
    report.appendChild(sunset)

    //forecast
    const dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const d = new Date();
   
    const temp1=document.createElement('p')
    temp1.innerHTML = `${dayNames[d.getDay()]}: ${data.list[0].main.temp}&deg;F`
    forecast.appendChild(temp1)


    const temp2=document.createElement('p')
    temp2.innerHTML = `${dayNames[d.getDay()+1]}: ${data.list[8].main.temp}&deg;F`
    forecast.appendChild(temp2)

    const temp3=document.createElement('p')
    temp3.innerHTML = `${dayNames[(d.getDay()+2) % 7]}: ${data.list[16].main.temp}&deg;F`
    forecast.appendChild(temp3)

    const temp5=document.createElement('p')
    temp5.innerHTML = `${dayNames[(d.getDay()+3) % 7]}: ${data.list[24].main.temp}&deg;F`
    forecast.appendChild(temp5)

    const temp6=document.createElement('p')
    temp6.innerHTML = `${dayNames[(d.getDay()+4) % 7]}: ${data.list[32].main.temp}&deg;F`
    forecast.appendChild(temp6)

    const temp7=document.createElement('p')
    temp7.innerHTML = `${dayNames[(d.getDay()+5) % 7]}: ${data.list[40].main.temp}&deg;F`
    forecast.appendChild(temp7)

    const temp8=document.createElement('p')
    temp8.innerHTML = `${dayNames[(d.getDay()+6) % 7]}: ${data.list[48].main.temp}&deg;F`
    forecast.appendChild(temp8)
  }

  


 
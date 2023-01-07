const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');



const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

if(cityVal === ""){
    city_name.innerText = `Please write name before search`;
    datahide.classList.add('data_hide');
}else{
    try {
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a7cac68b50bb39df99b67c02b52f1c54`;
    const response = await fetch(url);
    const data = await response.json();
    const arrData = data;
  
    console.log(arrData);
    
    temp_status.innerText = arrData.weather.main;
    city_name.innerText = `${arrData.name}, ${arrData.sys.country}`;
    temp_real_val.innerText = arrData.main.temp;
    

    temp_status.innerText = arrData.weather.main;
    const tempMood = arrData.weather[0].main;

    // condtition to check sunny or cloud
    if (tempMood == "Clear") {
        temp_status.innerHTML= "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";   
    }else if(tempMood == "Clouds"){
        temp_status.innerHTML= "<i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
    }else if (tempMood == "Rain") {
        temp_status.innerHTML= "<i class='fas fa-cloud-showers-heavy' style = 'color: #a4b0be;'></i>";
    }else if (tempMood == "Haze") {
        temp_status.innerHTML= "<i class='fas fa-smog'  style = 'color: #a4b0be;'></i>";
    }else{
        temp_status.innerHTML= "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
    }

    datahide.classList.remove('data_hide');

    } catch(error){
        console.log(error)
        city_name.innerText = `Please Enter the City name properly`;
        datahide.classList.add('data_hide');
    }
}

}
submitBtn.addEventListener('click' , getInfo);
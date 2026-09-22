let btn = document.querySelector('.btn')
let input = document.querySelector('.input')
let temp = document.querySelector('.temp')
let city = document.querySelector('.city')
let detail = document.querySelector('.detail')
let icon = document.querySelector('.icon')
btn.addEventListener('click',async function () {
    if(input.value === ''){
        alert('please Enter City')
    }
    try{
        const ApiKey = "f1a656e87bd5cdacac9ea79bfc56b66a"
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${ApiKey}&units=metric`

        const response = await fetch(url)
        const data= await response.json();
        console.log(data);
        if(data.cod === '404'){
      alert('city not found')
      return;

        } 
    
    
    temp.innerText= data.main.temp +'°C'
    city.innerText = input.value;
    detail.innerText = data.weather[0].description
    icon.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
     }
    catch(error){
        alert('city not found')
        console.log(error)
    }
})
input.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        btn.click();
    }
})

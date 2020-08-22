let cases = document.getElementById('cases');
let text = document.getElementById('text');
let button = document.getElementById('button');
let countryName = document.getElementById('countryName');
let confirmed = document.getElementById('confirmed');
let deaths = document.getElementById('deaths');
let recovered = document.getElementById('recovered');
let date = document.getElementById('date');
 
fetch("https://api.covid19api.com/summary")
.then((res) => {
    return res.json();
})
.then((data) => {
    
    countryName.innerHTML = "Global";
    let i=2000000;
    let interval_4 = setInterval(() => {
        confirmed.innerHTML = i+=10828;
        if(i>=data.Global.TotalConfirmed + 1){
        clearInterval(interval_4);
    }
    }, 1);
    let j=0;
    let interval_5 = setInterval(() => {
        deaths.innerHTML = j+=1005;
        if(j>=data.Global.TotalDeaths + 1){
        clearInterval(interval_5);
    }
    }, 1);
    
    let interval_6 = setInterval(() => {
        recovered.innerHTML = i+=10456;
        if(i>=data.Global.TotalRecovered + 1){
        clearInterval(interval_6);
    }
    }, 1);
    date.innerHTML = `Last Updated: ${data.Date}`;
    
})
.catch((err) => {
    console.log(err);
});


button.addEventListener('click', () => {

inputValue = text.value.toLowerCase();
fetch("https://api.covid19api.com/summary")
.then((res) => {
    return res.json();
})
.then((myData) => {
    const data = myData;
    const newData = data.Countries.filter((value) => {
        return value.Slug === inputValue
    });
    countryName.innerHTML = newData[0].Country;
    let i=0;
    let interval_1 = setInterval(() => {
        confirmed.innerHTML = i+=1028;
        if(i>=newData[0].TotalConfirmed + 1){
        clearInterval(interval_1);
    }
    }, 1);
    let j =0;
    let interval_2 = setInterval(() => {
        deaths.innerHTML = j+=1005;
        if(j>=newData[0].TotalDeaths + 1){
        clearInterval(interval_2);
    }
    }, 1);
    let k = 0;
    let interval_3 = setInterval(() => {
        recovered.innerHTML = k+=1056;
        if(k>=newData[0].TotalRecovered + 1){
        clearInterval(interval_3);
    }
    }, 1);
    date.innerHTML = `Last Updated: ${newData[0].Date}`;
    
})
.catch((err) => {
    console.log(err);
    countryName.innerHTML="Invalid Country Name !";
    recovered.innerHTML= 0;
    deaths.innerHTML=0;
    confirmed.innerHTML=0;
});
});




    

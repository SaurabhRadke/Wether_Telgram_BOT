const {Telegraf} = require('telegraf');

const bot = new Telegraf('5823494436:AAEBUPeThVF2iIYQ61TcBQeCnT8b34HcPpk');

bot.start((ctx)=>{
    const message=`
    Welcome to Weather BOT
    /start --> To start the BOT
    /echo city --> You type city name with echo
    /help --> Get Help `
    const name="Wether Forecast BOT"
    ctx.reply("Welcome to "+name+" to get the Whether INFO");
    ctx.reply(message)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fbf32a3cc0msha5f2c658bb20b3dp14a15bjsn5c30e51aed29',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
        .then(response => response.json())
        .then(response => { 
            const message=` Wether of Delhi
        Temperature is ${response.temp} Celcius
        Minimum Temperature is ${response.min_temp} Celcius
        Maximum Temperature is ${response.max_temp} Celcius
        Wind Speed is ${response.wind_speed} km/hr
        Humidity is ${response.humidity}
        Sunrise Timing is ${response.sunrise} A.M
        Sunset Timing is ${response.sunset} P.M`
        ctx.reply(message)
        })
        .catch(err => console.error(err));
        setInterval (function () {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'fbf32a3cc0msha5f2c658bb20b3dp14a15bjsn5c30e51aed29',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };
            
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
                .then(response => response.json())
                .then(response => { 
                    const message=` Wether of Delhi
                Temperature is ${response.temp} Celcius
                Minimum Temperature is ${response.min_temp} Celcius
                Maximum Temperature is ${response.max_temp} Celcius
                Wind Speed is ${response.wind_speed} km/hr
                Humidity is ${response.humidity}
                Sunrise Timing is ${response.sunrise} A.M
                Sunset Timing is ${response.sunset} P.M`
                ctx.reply(message)
                })
                .catch(err => console.error(err));
        }, 3600000);
   
})
bot.help((ctx) => ctx.reply('Send me a City Name'))
bot.command("echo",(ctx)=>{
    let input=ctx.message.text;
    let inpytArray=input.split(" ");
    console.log(inpytArray);
    let message="";
    if (inpytArray.length===1){
        message="You Entered only Echo"
    }
    else{
        inpytArray.shift();
        message=inpytArray.join("")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'fbf32a3cc0msha5f2c658bb20b3dp14a15bjsn5c30e51aed29',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${message}`, options)
        .then(response => response.json())
        .then(response => {const mess=` Wether of ${message}
        Temperature is ${response.temp} Celcius
        Minimum Temperature is ${response.min_temp} Celcius
        Maximum Temperature is ${response.max_temp} Celcius
        Wind Speed is ${response.wind_speed} km/hr
        Humidity is ${response.humidity}
        Sunrise Timing is ${response.sunrise} A.M
        Sunset Timing is ${response.sunset}P.M`
        ctx.reply(mess)})
        .catch(err => console.error(err));
    }
    ctx.reply(message);

})

bot.launch();
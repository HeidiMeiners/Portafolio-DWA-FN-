const express = require('express');
const https = require('https');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: true })); 
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const query = req.body.cityName; 
  const apiKey = process.env.WEATHER_API_KEY; 
  const units = 'metric'; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

  https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const weatherData = JSON.parse(data);
      if (weatherData.cod === 200) {
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        res.render('weather', {
          temp: temp,
          description: description,
          iconUrl: iconUrl,
          city: query,
        });
      } else {
        res.send('City not found. Please try again.');
      }
    });
  }).on('error', (err) => {
    console.error(`Error: ${err.message}`);
    res.send('An error occurred. Please try again.');
  });
});

app.listen(3000, () => {
  console.log(`listenging on 3000`);
});
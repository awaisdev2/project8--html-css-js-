const axios = require("axios");

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '223c33952amsh76dea946932eff7p1970f2jsn7c531678698e',
    'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
  }
};
const getWeather = (city)=>{
    
}

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
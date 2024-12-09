import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Weatherapp = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState([]);
    const [cityName, setCityName] = useState('ankara');
    const [desc , setDesc] = useState('');
    function getWeather(cityName) {
        setUrl(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${cityName}`);
        axios.get(url, {
            headers: {
              'authorization': 'apikey 5QxGml7XdoUJVt58gGeI5l:1S5z2YNhTwPD4vDdisSMrn'
            }
          })
        .then(response => {
          console.log(response.data.result[0]); // API'den dönen veriler
          setCityName(response.data.city);
          setDesc(response.data.result[0].description);
        })
        .catch(error => {
          console.error('Hata:', error);
        });
    }
    useEffect(() => {
        getWeather(cityName);
    }, []);
    console.log("şehir adi",cityName);
    return <div>
      <label class="text-3xl">İl Adı:</label>
      <input class="bg-blue-400  text-3xl" type="text"  onChange={(e) => setCityName(e.target.value)} />
      <button class="text-3xl bg-blue-500" onClick={() => getWeather(cityName)}>Getir</button>
      <h1 class="text-3xl">{desc}</h1>
    </div>;
}

export default Weatherapp


import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Days_weather from './Days_weather';

const Hava = () => {
    const [data, setData] = useState([]);
    const [cityName, setCityName] = useState('ankara');
    const [desc , setDesc] = useState('');
    const [temp , setTemp] = useState('');
    const [icon , setIcon] = useState('');
    const [humidity , setHumidity] = useState('');
    const [min , setMin] = useState('');
    const [max , setMax] = useState('');
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' ,hour12: false }))
    const [result, setResult] = useState([]);
    function getWeather(cityName) {
        const url = `https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${cityName}`;
        axios.get(url, {
            headers: {
              'authorization': 'apikey 5QxGml7XdoUJVt58gGeI5l:1S5z2YNhTwPD4vDdisSMrn',
              'Content-Type': 'application/json'
            }
          })
        .then(response => {
          console.log(response.data); // API'den dönen veriler
          setCityName(response.data.city);
          setDesc(response.data.result[0].description.slice(0,1).toUpperCase()+response.data.result[0].description.slice(1));
          setTemp(Math.floor(response.data.result[0].degree).toString() + "°C");
          setIcon(response.data.result[0].icon);
          setHumidity("%"+response.data.result[0].humidity);
          setMin(Math.floor(response.data.result[0].min).toString() + "°C");
          setMax(Math.floor(response.data.result[0].max).toString() + "°C");
          setDate(response.data.result[0].date);
          setResult(response.data.result);
        })
        .catch(error => {
          console.error('Hata:', error);
        });
    }

    useEffect(() => {
        getWeather(cityName);
    }, []);
    console.log("şehir adi",cityName);

    


    return <div className='h-screen' style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    }}>
      <div className='flex justify-end'>
        <label className="text-3xl mt-6 text-white bg-[rgba(0,0,0,0.28)]">İl Adı:</label>
        <input value={cityName} className="mt-6 bg-[rgba(0,0,0,0.28)] text-white text-3xl" type="text"  onChange={(e) => setCityName(e.target.value)} />
        <button className="text-3xl text-white mt-6 bg-[rgb(59,158,56)]" onClick={() => getWeather(cityName)}>Getir</button>
      </div>
      <div className='flex flex-col w-full mt-20 justify-center items-center text-white ]'>
        <div className='flex justify-between items-center w-1/2 p-5 bg-[rgba(0,0,0,0.28)] rounded-t-2xl'> 
          <div className='flex justify-start w-1/3'>
            <h1 className="text-8xl ">{temp}</h1>
          </div>
          <div className='flex justify-center w-1/3'>
            <img src={icon} alt="weather" className='w-2/3' />
          </div>
          <div className='flex justify-end w-1/3'>
            <h1 className="text-3xl ">{desc}</h1>
          </div>
          
        </div>
        <div className='flex flex-col items-center justify-center p-5 bg-[rgba(0,0,0,0.28)] w-1/2 border-white-800 border-t rounded-b-2xl'>
          <div className='flex justify-between w-full text-2xl'>
            <p>{temp}</p>
            <p>Nem: {humidity}</p>
            <p>Min: {min}</p>
            <p>Maks: {max}</p>
          </div>
          <div >
            <h1 className="text-9xl bg text-center">{time}</h1>
            <h1 className="text-3xl bg text-center">{date}</h1>
          </div>
        </div>
        <div className='flex justify-between px-5 py-2 bg-[rgba(0,0,0,0.28)] w-1/2 mt-5 rounded-2xl'>
          <div className='flex justify-center items-center'>
            {result.map((item) => (
              <Days_weather key={item.date} icon={item.icon} min={Math.floor(item.min).toString() + "°C"} max={Math.floor(item.max).toString() + "°C"} date={item.day} />
            ))}
          </div>
        </div>
      </div>
    </div>;
}

export default Hava

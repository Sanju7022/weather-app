import React, { useEffect, useState } from "react";
import "./Temp.css";

const Temp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("pune");

 useEffect(()=>{
  const fetchApi=async()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=98b3ed549db4755bd0b0c76215802d32`
    const response=await fetch(url)
    const resJson= await response.json()
    setCity(resJson.main)
  }
  fetchApi()
 },[search])
  return (
    <>
    <h1 className="header">Enter your city name</h1>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>

        {!city ? 
        (
          <p className="errorMsg">No data found</p>
        ) : 
        (
         <div>
           <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view"></i>
              {search}
            </h2>

            <h1 className="temp">{city.temp} °C</h1><hr />

            <h4 className="temp_max">Min : {city.temp_min} °C | Max : {city.temp_max} °C </h4>
            <h4 className="temp_max">Humidity: {city.humidity} </h4>
          </div>
         </div>
        )}

      </div>
    </>
  );
};

export default Temp;

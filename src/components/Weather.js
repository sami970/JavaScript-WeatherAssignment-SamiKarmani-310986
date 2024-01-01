import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import DisplayForecast from "./DisplayForecast";
import Warnings from "./Warnings";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    place: "",
    type: "temperature",
    unit: "",
    direction: "",
    value: 0,
    precipitation_type: "",
    time: "",
    
  });

 
   
  async function weatherData(e) {
    e.preventDefault();

    if (form.place === "") {
      alert("Add values");
    } else 
    {
      if(form.type === "temperature") {
        const data = await fetch(
          `http://localhost:8080/data/`+form.place
        )
          .then((res) => res.json())
          .then((data) => data);
          setWeather({ data: data });
        

      } else if(form.type === "forecast") 
      {  

          const forecastdata = await fetch(
            `http://localhost:8080/forecast/`+form.place
          )
            .then((res) => res.json())
            .then((forecastdata) => forecastdata);
            setWeather({ forecastdata: forecastdata }); 

      }else if(form.type === "warnings") 
      {  

          const warningsdata = await fetch(
            `http://localhost:8080/warnings`
          )
            .then((res) => res.json())
            .then((warningsdata) => warningsdata);
            setWeather({ warningsdata: warningsdata }); 

      }
    
          
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    /**Console */
  
    if (name === "place") {
      setForm({ ...form, place: value });
    }
    
    if (name === "type") {
      setForm({ ...form, type: value });
    }
    if (name === "warnings") {
      setForm({ ...form, type: value });
    }

  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <p>(Sami Karmani)</p>
      <form>

        <p> Select place:
          <select id="place" name="place"  onChange={(e) =>handleChange(e)}>
              <option value="Aarhus">Select city</option>
              <option value="Aarhus">Aarhus</option>
              <option value="Horsens">Horsens</option>
              <option value="Copenhagen">Copenhagen</option>
          </select>
        </p>
        <p> Select type :
            <select id="type" name="type" title ="Select type" onChange={(e) =>handleChange(e)}>
                <option value="temperature">temperature</option>
                <option value="forecast">forecast</option>  
                <option value="warnings">warnings</option>                
            </select>
            </p>
        

        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>


      </form>
      {console.log(form.type)}
      {weather.data !== undefined && form.type ==='temperature'? (
  
        <div>
         <DisplayWeather data={weather.data}/>
        </div>
        
      ) : null}

      {weather.forecastdata !== undefined && form.type ==='forecast'? (            
        <div>
          <DisplayForecast data={weather.forecastdata}/>
        </div>

      ) : null}

      {weather.warningsdata !== undefined && form.type ==='warnings'? (            
        <div>
          <Warnings data={weather.warningsdata}/>
        </div>

      ) : null}
      
    </div>
  );
}

export default Weather;

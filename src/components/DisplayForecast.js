import React, { useState } from "react";
import "./displayweather.css";

function DisplayForecast(props) {
  const { data } = props;
  let city ='xxx';

  /** Functional Programming */  
  // Parent constructor function
    function WeatherReport(city, date, type) {
      this.city = city;
      this.date = date;
      this.type = type;

    }

    // We added Method for displaying parent function properties using prototype
    WeatherReport.prototype.displayReport = function () {
      return " FP-> Weather report for.." +this.city + this.date +  " Type:.. "+this.type;      
    };

    // Child constructor function for daily forecasts
    function DailyForecast(city, date, type, highTemperature, lowTemperature) {
      // Call the parent constructor
      WeatherReport.call(this, city, date, type);
      this.highTemperature = highTemperature;
      this.lowTemperature = lowTemperature;
    }

    // Inherit from the parent prototype
    DailyForecast.prototype = Object.create(WeatherReport.prototype);

    // Method added to the child prototype starting with call to the parent display report function
    DailyForecast.prototype.displayChildForecast = function () {
      return (this.displayReport() +`High Temperature: ${this.highTemperature}°C Low Temperature: ${this.lowTemperature}°C`);     
      
    };
  
    // Creating instances of the child objects
    var dailyForecast = new DailyForecast(data[0].place, data[0].time, data[0].type, data[0].from, data[0].to);

  // __________________________________________________________________________________________________________________________________________ //

      /**  Object-oriented approach for WeatherForecast */
      class WeatherForecast {
        constructor(city, date, temperatureFrom, temperatureTo) {
          this.city = city;
          this.date = date;
          this.temperatureFrom = temperatureFrom;
          this.temperatureTo = temperatureTo;
        }
    
        displayForecast() {
          return (`OO-> Weather forecast for ${this.city} on ${this.date}: Temperature from: ${this.temperatureFrom}°C to: ${this.temperatureTo}°C`);
      
        }
      }
    
    // Creating instances of WeatherForecast
    const OOforecast = new WeatherForecast(data[1].place, data[1].time, data[1].from, data[1].to);

    // ________________________________________________________________________________________________________________________//
    /** USIN BIND  Start*/
    const weather = {
        location: "dummy",//data[1].place,
        forecast: function() {
            return (`The weather in ${this.location} is from ${this.temperatureFrom} to ${this.temperatureTo} `);
        }
    };
    
    const todayForecast = {
        location:data[2].place,
        temperatureFrom: data[2].from,
        temperatureTo: data[2].to

    };
    
    // Using bind to set the 'this' context for the forecast function
    const boundForecast = weather.forecast.bind(todayForecast);
    
    // Now, when we call boundForecast, 'this' will refers to todayForecast
    boundForecast(); // return weather temperature

  /** USIN BIND  Stop*/


  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>        

          <div className="maincard">  
                
            <span className="cardtitle">            
              {dailyForecast.displayChildForecast()}
            </span>           
           
          </div>

          <div className="maincard">        
            <span className="cardtitle">            
              {OOforecast.displayForecast()}
            </span>           
           
          </div>

          <div className="maincard">        
            <span className="cardtitle">            
              {boundForecast()}
            </span>           
           
          </div>

        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayForecast;

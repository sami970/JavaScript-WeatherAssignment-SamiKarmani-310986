import React, { useState } from "react";
import "./displayweather.css";

function Warnings(props) {
  const { data } = props;


  /** Factory function for creating WeatherWarning objects **/
  function createWeatherWarning(city, date, type, severity) {
    return {
        city: city,
        date: date,
        type: type,
        severity: severity,

        // Method to display the weather warning information
        displayWarning: function () {
            console.log(`Weather warning for ${this.city} on ${this.date}:`);           
        }
    };
  }
 
  // Creating 2 instances of WeatherWarning using the factory function
  var warning1 = new createWeatherWarning(data.warnings[0].prediction.place,data.warnings[0].prediction.time, data.warnings[0].prediction.type, data.warnings[0].severity, data.warnings[0].prediction.unit);
  var warning2 = new createWeatherWarning(data.warnings[1].prediction.place,data.warnings[1].prediction.time, data.warnings[1].prediction.type, data.warnings[1].severity, data.warnings[1].prediction.unit);


/**** Direct object creation for WeatherWarning **/
var warning3 = {
  city: data.warnings[2].prediction.place,
  date: data.warnings[2].prediction.time,
  type: data.warnings[2].prediction.type,
  severity: data.warnings[2].severity,
  unit : data.warnings[2].prediction.unit,

  // Method to display the weather warning information
  displayWarning: function () {
      console.log(`warning3 Weather warning for ${this.city} on ${this.date}:`); 
  }
};

/*** Concatenative inheritance */
// Base object representing common properties and methods for weather warnings
var weatherWarningBase = {
  displayWarning: function () {
      return (`weatherWarningBase Weather warning for ${this.city} on ${this.date}: ${this.type} and Severity: ${this.severity}`);      
    
  }
};

// Create a weather warning using concatenative inheritance 
var warning4 = {
  
};
// Copy properties and methods from warning3 and weatherWarningBase and paste it to warning4
Object.assign(warning4, warning3,weatherWarningBase);

// Display the warning using the inherited method
warning4.displayWarning();

  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>        

          <div className="maincard">        
            <span className="cardtitle">
              <p>** Warnings **</p>
            </span>           
           
          </div>
          <div className="weatherdetails">
            
            <div className="section1">
              <table>
              <tbody>     
              <tr>
                <td>
                  <h4>warning1 City</h4>
                  <span> {warning1.city} </span>
                </td>
              </tr> 

              <tr>
                <td>
                  <h4>Type</h4>
                  <span> {warning1.type} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Severity</h4>
                  <span> {warning1.severity} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Unit</h4>
                  <span> {warning1.unit} </span>
                </td>
              </tr>   

              
              </tbody>
              </table>
            </div>

            <div className="section2">
              <table>
              <tbody>     
              <tr>
                <td>
                  <h4>warning2 City</h4>
                  <span> {warning2.city} </span>
                </td>
              </tr> 

              <tr>
                <td>
                  <h4>Type</h4>
                  <span> {warning2.type} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Severity</h4>
                  <span> {warning2.severity} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Unit</h4>
                  <span> {warning2.unit} </span>
                </td>
              </tr>   

              
              </tbody>
              </table>
            </div>
            <div className="section3">
              <table>
              <tbody>     
              <tr>
                <td>
                  <h4>warning3 City</h4>
                  <span> {warning3.city} </span>
                </td>
              </tr> 

              <tr>
                <td>
                  <h4>DateTime</h4>
                  <span> {warning3.date} </span>
                </td>
              </tr> 

              <tr>
                <td>
                  <h4>Type</h4>
                  <span> {warning3.type} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Severity</h4>
                  <span> {warning3.severity} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Unit</h4>
                  <span> {warning3.unit} </span>
                </td>
              </tr>   

              
              </tbody>
              </table>
            </div>   

            <div className="section4">
              <table>
              <tbody>     
              <tr>
                <td>
                  <h4>Warning4</h4>
                  <span> {warning4.displayWarning()} </span>
                </td>
              </tr> 

             

              
              </tbody>
              </table>
            </div>         
           

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

export default Warnings;

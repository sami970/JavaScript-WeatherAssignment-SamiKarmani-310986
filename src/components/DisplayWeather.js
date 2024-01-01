import React, { useState } from "react";
import "./displayweather.css";
function DisplayWeather(props) {
  const { data } = props;

  const [currentIndex, setCurrentIndex]= useState(0)

  const handlePrevClick = () => {
    if (currentIndex >0 ) {
      setCurrentIndex(currentIndex -4);
      
    }
  };

  const handleNextClick = () => {
    if (currentIndex < data.length -4){
      setCurrentIndex(currentIndex +4)
    
    }
  };

  console.log(data);

  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
        <div>
            <span className="cardtitle">
              <button onClick={handlePrevClick}>Previous</button>
              <button onClick={handleNextClick}>Next</button>
            </span> 
            </div>  

          <div className="maincard">        
            <span className="cardtitle">
              {data[currentIndex].place} {data[currentIndex].time}
            </span>           
           
          </div>
          <div className="weatherdetails">

            
            <div className="section1">
              <table>
              <tbody>     
              <tr>
                <td>
                  <h4>Temperature</h4>
                  <span> {data[currentIndex].value} </span>
                </td>
              </tr> 

              <tr>
                <td>
                  <h4>Precipitation</h4>
                  <span> {data[currentIndex+1].value} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Wind speed</h4>
                  <span> {data[currentIndex+2].value} </span>
                </td>
              </tr>   

              <tr>
                <td>
                  <h4>Cloud coverage</h4>
                  <span> {data[currentIndex+3].value} </span>
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
                  <h4>Unit</h4>
                  <span>{"C"}</span>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                  <h4>Unit</h4>
                  <span>{"mm"}</span>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                  <h4>Unit</h4>
                  <span>{"m/s"}</span>
                  </td>
                  
                </tr>

                <tr>
                  <td>
                  <h4>Unit</h4>
                  <span>{"%"}</span>
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

export default DisplayWeather;

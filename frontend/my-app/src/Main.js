import React from 'react'
import './main.css'
import Symptoms from './components/Symptoms'
import Model from './components/Model'
import Calendar from './components/Calendar'

function Main() {
    return (
        <div>
            <div className="container">
             <div className="row  l-5">
            <div className="col-lg-3 mt-5 ">
            <Symptoms />
            </div>

            <div className="col-lg-7 mt-5  model">
             
              <Model />
             
                
           
              
            </div>
         </div>
         <div className="reference mb-4 mt-0">
          <ul className="mb-4">
                     <li> <div className="circle follicula"></div> follicula phase</li>
                        <li><div className="circle ovulating"></div> Ovulation</li>
                        <li><div className="circle luteral"></div> luteral phase</li>
                        <li><div className="circle menstrual"></div> menstrual phase</li> 
             </ul>
              
         </div>     
          
          
        
          
        </div>
            <div className="calender">
             <Calendar />
            </div>
           
        </div>
         
        
    )
}

export default Main

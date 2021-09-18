import React from 'react'
import './main.css'
import Symptoms from './components/Symptoms'
import Model from './components/Model'

function Main() {
    return (
         <div className="container">
             <div className="row ">
            <div className="col-lg-3 m-5">
            <Symptoms />
            </div>

            <div className="col-lg-7 mt-5 mb-2 model">
             
              <Model />
             
                
                   
          
              
            </div>
         </div>
           
          <div className="reference mb-4">
          <ul className="m-4">
                     <li> <div className="circle"></div> follicula phase</li>
                        <li><div className="circle"></div> Ovulation</li>
                        <li><div className="circle"></div> luteral phase</li>
                        <li><div className="circle"></div> menstrual phase</li> 
             </ul>
              
         </div>  
        
          
        </div>
        
    )
}

export default Main

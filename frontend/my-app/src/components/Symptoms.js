import React,{useState,useEffect} from 'react'
import './symptoms.css'
import axios from 'axios'
import light_flow from '../assets/images/light_flow.svg'
import heavy_flow from '../assets/images/heavy_flow.svg'
import medium_flow from '../assets/images/medium_flow.svg'
import spotting from '../assets/images/spotting.svg'

import angry from '../assets/images/angry.svg'
import calm from '../assets/images/calm.svg'
import happy from '../assets/images/happy.svg'
import sad from '../assets/images/sad.svg'

import pain_1 from '../assets/images/pain_1.svg'
import pain_2 from '../assets/images/pain_2.svg'
import pain_3 from '../assets/images/pain_3.svg'





function Symptoms() {

    const [flow, setflow] = useState("")
    const [mood,setmood]  = useState("")
    const [pain,setpain]  =  useState("")
    const [lengthCycle,setlengthCycle] = useState(0)
    const [lastPeriodDate,setlastPeriodDate] = useState(new Date())
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "SEP", "Oct", "Nov", "Dec"
];
    const d  = new Date()

    console.log()
  /*  console.log(flow)
    console.log(mood)
    console.log(pain)
    console.log(lengthCycle)
    console.log(lastPeriodDate)
*/ 
const resp={}
    async function submit(){
        try{
            const symptoms={
                flow,
                lengthCycle,
                lastPeriodDate:lastPeriodDate
            }
            console.log(symptoms)
          
           resp =await  axios.post("http://localhost:8080/getPredictionResult",symptoms)
        }catch(err){
           
            alert(err)
        }
        console.log(resp)
    }
    return (
    
            <div className="symptoms">
              
                    <div className="row heading ">
                            <div className="col-lg-4 title-icon" onClick={submit}>
                                 <h5 >{d.getUTCDate()}</h5>
                                  <h6>{monthNames[d.getMonth()]} </h6>
                            </div>
                            <div className="col-lg-8 title-text">
                                <h2>add today's symptoms</h2>
                            </div>
                    </div>
                    
                   
                    <h2 className="sub-heading"> flow</h2>
                    <div className="row flow">
                         <div className="col-lg-2 img-col">
                            <label className="sym_img " onClick={(e)=>setflow(e.target.value)}>
                            <input type="radio" name="flow" value="light" />    
                            <img src={light_flow} alt="light flow image" className="img " />
                            <h6 className="sym_text">light</h6>
                             </label> 
                           
                          
                         </div>
                         <div className="col-lg-2 img-col ">
                            <label className="sym_img" onClick={(e)=>setflow(e.target.value)}>
                            <input type="radio" name="flow" value="medium" />    
                            <img src={medium_flow} alt="light flow image" className="img " />
                             </label> 
                           
                           <h6 className="sym_text">medium</h6>
                         </div>
                         <div className="col-lg-2 img-col">
                            <label className="sym_img" onClick={(e)=>setflow(e.target.value)}>
                            <input type="radio" name="flow" value="heavy" />    
                            <img src={heavy_flow} alt="light flow image" className="img " />
                             </label> 
                           
                           <h6 className="sym_text ">heavy</h6>
                         </div>
                         <div className="col-lg-2 img-col">
                            <label className="sym_img" onClick={(e)=>setflow(e.target.value)}>
                            <input type="radio" name="flow" value="spotting" />    
                            <img src={spotting} alt="light flow image" className="img" />
                             </label> 
                           
                           <h6 className="sym_text">spotting</h6>
                         </div>
                         </div>


                    <h2 className="sub-heading"> mood</h2>
                        <div className="row mood">
                        <div className="col-lg-2 img-col">
                            <label className="sym_img " onClick={(e)=>setmood(e.target.value)}>
                            <input type="radio" name="mood1" value="calm" />    
                            <img src={calm} alt="light flow image" className="img " />
                            <h6 className="sym_text">calm</h6>
                             </label>    
                         </div>
                         <div className="col-lg-2 img-col">
                            <label className="sym_img" onClick={(e)=>setmood(e.target.value)}>
                            <input type="radio" name="mood2" value="sad" />    
                            <img src={sad} alt="light flow image" className="img " />
                             </label> 
                           
                           <h6 className="sym_text">sad</h6>
                         </div>
                         <div className="col-lg-2 img-col">
                            <label className="sym_img" onClick={(e)=>setmood(e.target.value)}>
                            <input type="radio" name="mood3" value="happy" />    
                            <img src={happy} alt="light flow image" className="img " />
                             </label> 
                           
                           <h6 className="sym_text ">happy</h6>
                         </div>
                         <div className="col-lg-2 img-col">
                            <label className="sym_img" onClick={(e)=>setmood(e.target.value)}>
                            <input type="radio" name="mood4" value="angry" />    
                            <img src={angry} alt="light flow image" className="img" />
                             </label> 
                           
                           <h6 className="sym_text">angry</h6>
                         </div>  
                        </div>   




                        <h2 className="sub-heading"> pain</h2>
                        <div className="row pain">
                        <div className="col-lg-2 img-col">
                            <label className="sym_img " onClick={(e)=>setpain(e.target.value)}>
                            <input type="radio" name="pain" value="light" />    
                            <img src={pain_1} alt="light flow image" className="img " />
                            <h6 className="sym_text">light</h6>
                             </label>    
                         </div>
                         <div className="col-lg-2 img-col">
                            <label className="sym_img" onClick={(e)=>setpain(e.target.value)}>
                            <input type="radio" name="pain" value="medium" />    
                            <img src={pain_2} alt="light flow image" className="img " />
                             </label> 
                           
                           <h6 className="sym_text">medium</h6>
                         </div>
                         <div className="col-lg-2 img-col">
                            <label className="sym_img" onClick={(e)=>setpain(e.target.value)}>
                            <input type="radio" name="pain" value="high" />    
                            <img src={pain_3} alt="light flow image" className="img " />
                             </label> 
                           
                           <h6 className="sym_text ">high</h6>
                         </div>
                         
                        </div>   

                        <h2 className="sub-heading"> total days in cycle</h2>
                        <div className="row">
                        <input type="number"  className="total_days" onChange={(e)=>setlengthCycle(e.target.value)} />
                        </div>

                        <h2 className="sub-heading"> last period date</h2>
                        <div className="row">
                        <input type="date"  className="periodDate" onChange={(e)=>setlastPeriodDate(e.target.value)} />
                        </div>

                        
            </div>
           


        
    )
}

export default Symptoms

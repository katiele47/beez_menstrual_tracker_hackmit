import React,{useContext,useEffect} from 'react'
import './calender.css'
import PhaseContext from '../context/PhaseContext';

function Calendar() {

    const date = new Date();
    console.log(date.getUTCDate())
    const {phase,day} =  useContext(PhaseContext)

    console.log(phase)
   
     console.log(day)
    let dates =[]
    function getdates(){
        
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        console.log(firstDay)   
        firstDay.setDate(firstDay.getDate()+1)        
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        lastDay.setDate(lastDay.getDate()+1)
        var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
       
        for (var d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
            let colorValue=""
            if(d.getUTCDate()=== date.getUTCDate())
            {   
                console.log("found it")
                switch(phase){
                    case "luteal": colorValue="dgreen"
                    break;
                    case "menstrual": colorValue="lred"
                    break;
                    case "ovulation": colorValue="lgreen"
                    break;
                    case "follicular" : colorValue="lblue"
                    break;
                }
                dates.push({day:d.getUTCDate(),weekday:days[d.getUTCDay()],colorValue});
            }
            else if(d.getUTCDate()=== day)
            dates.push({day:d.getUTCDate(),weekday:days[d.getUTCDay()],colorValue:"lred"});
            else
            dates.push({day:d.getUTCDate(),weekday:days[d.getUTCDay()],colorValue:"red"});
        }
       
    }
     getdates()
     
     useEffect(() => {
         
     }, [phase])
   // console.log(dates)
    return (
        <div className="calender">
           {dates.map(date=>{
               return <div className="date">
                   <h6 >{date.weekday}</h6>
                   <h5 className={date.colorValue}>{date.day}</h5>
               </div>
              
           })}
        </div>
    )
}

export default Calendar

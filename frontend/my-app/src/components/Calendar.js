import React from 'react'
import './calender.css'

function Calendar() {

    const date = new Date();
    
    
    let dates =[]
    function getdates(){
        
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        console.log(firstDay)   
        firstDay.setDate(firstDay.getDate()+1)        
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        lastDay.setDate(lastDay.getDate()+1)
        var days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
       
        for (var d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
            if(d.getUTCDay()===0 || d.getUTCDay()===1)
            dates.push({day:d.getUTCDate(),weekday:days[d.getUTCDay()],class:"red"});
            else
            dates.push({day:d.getUTCDate(),weekday:days[d.getUTCDay()],class:"black"});
        }
       
    }
     getdates()
  
    console.log(dates)
    return (
        <div className="calender">
           {dates.map(date=>{
               return <div className="date">
                   <h6 className={date.class}>{date.weekday}</h6>
                   <h5 className={date.class}>{date.day}</h5>
               </div>
              
           })}
        </div>
    )
}

export default Calendar

import React, { useState } from 'react';



const Time = () => {
    const time = new Date().toLocaleTimeString();

    const [currentTime, setTime] = useState(time);
    

    let updateTime = () =>{
        const time = new Date().toLocaleTimeString();
        setTime(time);
    }
    setInterval(updateTime,1000);
    return <h1>{currentTime}</h1>
}
 
export default Time;
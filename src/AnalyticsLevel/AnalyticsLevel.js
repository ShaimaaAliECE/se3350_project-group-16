import React, { useState } from 'react';
import ReactDOM from "react-dom";

import './AnalyticsLevel.css';
import ToolTip from 'react-tooltip';
import infoLogo from '../Images/index.png';
import "rc-slider/assets/index.css";

const AnalyticsLevel = (props)=>{
    const [times, setTimes] = useState([]);

    let levelTimeData = [];
    
    function generate(){
        console.log("analysis started");
        console.log("Data length : " + props.levelData.length)
        for(let i=0 ; i<props.levelData.length ; i++){
            console.log(">> Level " + (i+1) + " : " + props.levelData[i]);
            let seconds = props.levelData[i]/1000;
            let minutes = seconds/60;
            seconds = seconds%60;
            levelTimeData.push(Math.floor(minutes) + ":" + Math.floor(seconds));
            setTimes(levelTimeData);
        }
    }

    return(
        <div className="level-container">

            <div className="header">
                <div className="level-info">
                    <div>Admin Performance Review!</div>
                    <img src={infoLogo} className='info-icon' data-tip="" data-place="right"></img>
                    <ToolTip/>
                </div>
            </div>
            
            <div>
                <button  onClick={()=>{generate()}} style={{width:'20%'}}>Generate Analysis</button>
            </div>
                
            <div className='header'>
                User's Level 1 completion time: 
            </div>
                <p>{times[0]}</p>
            <div className='header'>
                User's Level 2 completion time: 
            </div>
                <p>{times[1]}</p>
            <div className='header'>
                User's Level 3 completion time: 
            </div>
                <p>{times[2]}</p>
            <div className='header'>
                User's Level 4 completion time: 
            </div>
                <p>{times[3]}</p>
            <div className='header'>
                User's Level 5 completion time: 
            </div>
                <p>{times[4]}</p>
            <div className='header'>
                User's Custom Level completion time: 
            </div>
                <p>{times[5]}</p>
        </div>
    )
}

export default AnalyticsLevel;
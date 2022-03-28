import React, { useState } from 'react';
import ReactDOM from "react-dom";

import './LevelCustom.css';
import ToolTip from 'react-tooltip';
import infoLogo from '../Images/index.png';
import "rc-slider/assets/index.css";
import Timer  from 'react-compound-timer'

const AnalyticsLevel = (props)=>{

    return(
        <div className="level-container">

            <div className="header">
                <div className="level-info">
                    <div>Admin Performance Review</div>
                    <img src={infoLogo} className='info-icon' data-tip="" data-place="right"></img>
                    <ToolTip/>
                </div>
            </div>
                
            <div className = "array-container">

                <div className="array-layout">
                   
                   <div className='array-nums'>
                    </div>
                </div>
      
            </div>
            <div className= "array-layout">

                </div>
        </div>
    )
}

export default AnalyticsLevel;
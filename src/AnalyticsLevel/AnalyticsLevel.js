import React, { useState } from 'react';
import ReactDOM from "react-dom";

import './AnalyticsLevel.css';
import ToolTip from 'react-tooltip';
import infoLogo from '../Images/index.png';
import "rc-slider/assets/index.css";

const AnalyticsLevel = (props)=>{

    return(
        <div className="level-container">

            <div className="header">
                <div className="level-info">
                    <div>Admin Performance Review!</div>
                    <img src={infoLogo} className='info-icon' data-tip="" data-place="right"></img>
                    <ToolTip/>
                </div>
            </div>
                
            <div className='header'>
                User's Level 1 completion time: 
            </div>
            <div></div>
            <div className='header'>
                User's Level 2 completion time: 
            </div>
            <div></div>
            <div className='header'>
                User's Level 3 completion time: 
            </div>
            <div></div>
            <div className='header'>
                User's Level 4 completion time: 
            </div>
            <div></div>
            <div className='header'>
                User's Level 5 completion time: 
            </div>
            <div></div>
            <div className='header'>
                User's Custom Level completion time: 
            </div>
        </div>
    )
}

export default AnalyticsLevel;
import React, { useState } from 'react';

import './Home.css';
import Level1 from './Level1/Level1';
import Level2 from './Level2/Level2';
import Level3 from './Level3/Level3';
import Level4 from './Level4/Level4';
import Level5 from './Level5/Level5';
import LevelCustom from './LevelCustom/LevelCustom';
import AnalyticsLevel from './AnalyticsLevel/AnalyticsLevel';


let analytics = [];

const Home = ()=>
{
    const [levelOne, setOne] = useState(false);
    const [levelTwo, setTwo] = useState(false);
    const [levelThree, setThree] = useState(false);
    const [levelFour, setFour] = useState(false);
    const [levelFive, setFive] = useState(false);
    const [levelCustom, setCustom] = useState(false);
    const [levelAnalystics , setAnalytics] = useState(false);
    const [analyticsMemory, setMemory] = useState([]);

    const [hideStart, setStart] = useState(true);

    function analyticsCallback (levelTimeData){
        console.log(">> Level Finsihed In : " + levelTimeData);
        analytics.push(levelTimeData);
        console.log("Confirm : " + analytics[0]);
        let temp = analyticsMemory;
        temp.push(levelTimeData);
        setMemory([...temp]);
    }

    function nextLevel(level)
    {
        
        
        switch(level)
        {

            case 0:
                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(false);
                setFive(false);
                setStart(true);
                setCustom(false);
                setAnalytics(false);
                break;

            case 1:
                setOne(true)
                setTwo(false)
                setThree(false)
                setFour(false);
                setFive(false);
                setCustom(false);
                setAnalytics(false);
                break;

            case 2:
                setOne(false)
                setTwo(true)
                setThree(false)
                setFour(false);
                setFive(false);
                setCustom(false);
                setAnalytics(false);
                break;
            case 3:
                setOne(false)
                setTwo(false)
                setThree(true)
                setFour(false);
                setFive(false);
                setCustom(false);
                setAnalytics(false);
                break;
            case 4:
                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(true);
                setFive(false);
                setCustom(false);
                setAnalytics(false);
                break;
            case 5:
                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(false);
                setFive(true);
                setCustom(false);
                setAnalytics(false);
                break;
            case 6:
                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(false);
                setFive(false); 
                setCustom(true);
                setAnalytics(false);
                break;
            case 7:
                setOne(false)
                setTwo(false)
                setThree(false)
                setFour(false);
                setFive(false); 
                setCustom(false);
                setAnalytics(true);
                break;

            
            default:
                console.log('error  in level  selection.')

        }

    }
  





    return(

        <div className="sorting-tutor">
           <div className="title">Welcome To The Sorting Tutor</div>
          {hideStart&& <button onClick={()=>{nextLevel(1); setStart(false)}}>Click Here to Start</button>}
           <div name="body">

 
                        {levelOne&&<Level1 goToNext={nextLevel} recordTime={analyticsCallback}/>} 
                        {levelTwo&&<Level2  goToNext={nextLevel} recordTime={analyticsCallback}/>}  
                        {levelThree&&<Level3 goToNext={nextLevel} recordTime={analyticsCallback}/>} 
                        {levelFour&&<Level4 goToNext={nextLevel} recordTime={analyticsCallback}/>} 
                        {levelFive&&<Level5 goToNext={nextLevel} recordTime={analyticsCallback}/>} 
                        {levelCustom&&<LevelCustom goToNext={nextLevel} recordTime={analyticsCallback}/>}
                        {levelAnalystics&&<AnalyticsLevel goToNext={nextLevel} levelData={analyticsMemory}/>}
           </div>
           
        </div>

    );
}

export default Home;

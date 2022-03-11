import React, { useState } from 'react';

import {mergeSortingAlgo} from  '../MergeSort';
import './Level5.css';
import  Steps4 from './Steps5';
import ToolTip from 'react-tooltip';
import infoLogo from '../Images/index.png';

const Level5 = (props)=>{


    const[sort, setSort]=useState([]);
    const [unsort, setUnSort] = useState([]);
    const[branch, setBranch]  = useState([]);
    const [generate, setGenerate] = useState(false);
    const [toggleStep, setStep] = useState(true);


    function startSort()
    {
        
        let nums=[]
   

        for(let i=0;i<50;i++)
        {
            nums.push(Math.floor(Math.random()*100)+1);
        }

        setUnSort([...nums]);

        let info = mergeSortingAlgo(nums);
        setBranch(info[1])

        setSort(info[0]);
       
    }


    function  resetGenerate()
    {
        setGenerate(false);
        setSort([]);
        setUnSort([]);
        setStep(true);
        props.goToNext(5);
    }


    function intitiate()
    {
        startSort();
        setGenerate(true);
        setStep(false);

    }

    return(
        <div className="level-container">

            <div className="header">
                <div className="level-info">
                    <div>Level 5</div>
                    <img src={infoLogo} className='info-icon' data-tip="Level 5: The data set is now 50 numbers, select the correct steps for a merge sort" data-place="right"></img>
                    <ToolTip/>
                </div>
                <button onClick={()=>{intitiate()}} disabled={generate}>Generate  Numbers</button>
            </div>

      
                
            <div className = "array-container">

                <div className="array-layout">
                   
                   <div className='array-nums'>
                    {unsort.map((element, index)=>{
                        return(
                            <div key={index} style={{marginLeft: '.25rem' ,marginRight: '.25rem' }}  > {element} </div>
                        )
                    })}
                    </div>
                 

                </div>


                <div className = "array-layout">
                    <div className='array-nums'>
                    {sort.map((element, index)=>{
                        return(
                            <div key={index} style={{marginLeft: '.25rem' ,marginRight: '.25rem' }}  > {element} </div>
                        )
                    })}
                    </div>

                </div>
      
            </div>
             <Steps4 contents={branch} toggle={toggleStep} resetGen={resetGenerate}></Steps4> 
        </div>
    )
}

export default Level5;
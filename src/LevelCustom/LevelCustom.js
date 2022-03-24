import React, { useState } from 'react';
import ReactDOM from "react-dom";

import {mergeSortingAlgo} from  '../MergeSort';
import './LevelCustom.css';
import  Steps4 from './StepsCustom';
import ToolTip from 'react-tooltip';
import infoLogo from '../Images/index.png';
import Range from 'rc-slider';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";

//const { createSliderWithTooltip } = Slider;
//const Range = createSliderWithTooltip(Slider.Range);

const LevelCustom = (props)=>{


    const[sort, setSort]=useState([]);
    const [unsort, setUnSort] = useState([]);
    const[branch, setBranch]  = useState([]);
    const [generate, setGenerate] = useState(false);
    const [toggleStep, setStep] = useState(true);
    const [value,setValue] = useState(5);
    const [range,setRange] = useState([10,20]);

    function startSort()
    {
        
        let nums=[]
   


        for(let i=0;i<value;i++)
        {
            let numRange = range[1] - range[0];
            nums.push(Math.floor(Math.random()*numRange)+range[0]);
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
                    <div>Custom Level</div>
                    <img src={infoLogo} className='info-icon' data-tip="Custom Level: The data set size it up to you, select the correct steps for a merge sort" data-place="right"></img>
                    <ToolTip/>
                </div>
                <button onClick={()=>{intitiate()}} disabled={generate}>Generate  Numbers</button>
            </div>
                
            <div className='slider'>
            <div style={{}}>Please enter the number of values you would like to practice with</div>
                <p>{value}</p>
                <Slider  min={0} max={120} onChange={val => setValue(val)}
                                            railStyle={{
                                                height: 2 }}
                                            handleStyle={{
                                                height: 28,
                                                width: 28,
                                                marginLeft: 100,
                                                marginTop: -14,
                                                backgroundColor: "blue",
                                                border: 0}}
                                            trackStyle={{
                                                 background: "none"}}/>
            </div>

            <div className='slider'>
                <div style={{}}>Please select the range of the values that will be generated</div>
                <p> minimum value possible: Maximum value possible </p>
                <p>{range[0]},{range[1]}</p>
                <Slider range={true} min={2} max={70} defaultValue= {[10,20]}  onChange={val =>setRange(val)}
                                                                railStyle={{
                                                                    height: 2 }}
                                                                handleStyle={{
                                                                    height: 28,
                                                                    width: 28,
                                                                    marginLeft: 100,
                                                                    marginTop: -14,
                                                                    backgroundColor: "blue",}}
                                                                trackStyle={{
                                                                    background: "none"}}/>
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

export default LevelCustom;
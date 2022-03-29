import React, { useState, useRef } from "react";

import {mergeSortingAlgo} from  '../MergeSort';
import './Level5.css';

import ToolTip from 'react-tooltip';
import infoLogo from '../Images/index.png';
import  Steps5 from './Steps5';
import Timer  from 'react-compound-timer'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Level5 = (props) => {
  const [sort, setSort] = useState([]);
  const [unsort, setUnSort] = useState([]);
  const [branch, setBranch] = useState([]);
  const [generate, setGenerate] = useState(false);
  const [toggleStep, setStep] = useState(true);
  const [menuSel, setMenu] = useState(false);
  const timerRef = useRef(null);

  let currentTime = "";

  function startSort() {
    let nums = [];

    for (let i = 0; i < 50; i++) {
      nums.push(Math.floor(Math.random() * 100) + 1);
    }

    setUnSort([...nums]);

    let info = mergeSortingAlgo(nums);
    setBranch(info[1]);

    setSort(info[0]);
  }

  function resetGenerate() {
    setGenerate(false);
    setSort([]);
    setUnSort([]);
    setStep(true);
    props.recordTime(currentTime);
    props.goToNext(6);
  }

  function levelSelect(select){

  
      props.goToNext(select)
  }

  function intitiate() {
    startSort();
    setGenerate(true);
    setStep(false);
  }

  function restartLevel()
  {
    setGenerate(false);
    setSort([]);
    setUnSort([]);
    setBranch([]);
    setStep(true);
    setGenerate(true);
    setMenu(false);
    timerRef.current.reset();
    
 

  }

  function getTimeFormat(time)
  {
    let minutes = time/60000;
    let seconds = (time%60000)/1000;

    return `${parseInt(minutes)}:${parseInt(seconds)}`

  }

  function loadTime(time)
  {
 

  localStorage.setItem('5',JSON.stringify(time))
  currentTime = time;
  }

  function menu(selection)
  {
    
    if(selection.value=="Merge Sort")
    {
      setMenu(true);
      setGenerate(false);

    }
  }

  return (
    <div className="level-container">
      <div className="header">
      <div className="level-info">
          <div>Level 5</div>
          <img
            src={infoLogo}
            className="info-icon"
            data-tip="Level 5: Let's take it up another notch and see if you can sort 50 numbers, conditions are the same"
            data-place="right"
          ></img>
          <ToolTip />
        </div>

        <div>Time Spent on Level4  {getTimeFormat(JSON.parse(localStorage.getItem("4")))}</div>


        <div style={{flexDirection:"column", justifyContent:'center' }}>

<Dropdown options={["Merge Sort", "Bubble Sort", "Selection Sort"]} onChange={menu} placeholder="Select an Algorithm" disabled={menuSel} />

</div>
        <button
          onClick={() => {
            intitiate();
          }}
          disabled={generate}
        >
          Generate Numbers
        </button>
      </div>

      <div className="array-container">
        <div className="array-layout">
          <div className="array-nums">
            {unsort.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{ marginLeft: ".25rem", marginRight: ".25rem" }}
                >
                  {" "}
                  {element}{" "}
                </div>
              );
            })}
          </div>
        </div>

        <div className="array-layout">
          <div className="array-nums">
            {sort.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{ marginLeft: ".25rem", marginRight: ".25rem" }}
                >
                  {" "}
                  {element}{" "}
                </div>
              );
            })}
          </div>

             
      
            </div>

            <div className= "array-layout">
            <Timer
            initialTime={0}
            direction="forward"
            ref={timerRef}
            checkpoints={[
              {
                time: 300000,
                callback: () => {
                  props.goToNext(0);
                },
              },
            ]}
          >
               {({getTime})=>{

                 
                 
                 return (

                  <React.Fragment>
                    <div style={{ marginRight: ".5rem" }}>Timer </div>

                    <Timer.Minutes />
                    <div>:</div>
                    <div>{loadTime(getTime())}</div>
               
                    <Timer.Seconds />
                  </React.Fragment>
                
            )}}
          </Timer>
                </div>
            <Steps5
        contents={branch}
        toggle={toggleStep}
        resetGen={resetGenerate}
        lvlSelect={levelSelect}
        resetLevel={restartLevel}
      ></Steps5> 
        </div>
      </div>
      
   
  );
};

export default Level5;

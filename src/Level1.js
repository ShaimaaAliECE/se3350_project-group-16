import React, { useState } from 'react';

import {mergeSortingAlgo} from  './MergeSort';
import './Level1.css';
import  Steps from './Steps';

function Level1(){


    const[sort, setSort]=useState([]);
    const [unsort, setUnSort] = useState([]);
    const[branch, setBranch]  = useState([]);
    const [generate, setGenerate] = useState(false);
    const [toggleStep, setStep] = useState(true);


    function startSort()
    {
        
        let nums=[]
   

        for(let i=0;i<10;i++)
        {
            nums.push(Math.floor(Math.random()*20));
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
    }


    function intitiate()
    {
        startSort();
        setGenerate(true);
        setStep(false);

    }

    return(
        <div className="columnLarge">

            <div className="row">
                <div className="boldFont">Level 1</div>
                <button onClick={()=>{intitiate()}} disabled={generate}>Generate  Numbers</button>
            </div>

            <div className = "row">
                
            <div className = "columnSmall">

                <div className="greenBorder">
                    {unsort.map((element)=>{
                        return(
                            <div key={Math.random()} style={{marginLeft: '.5rem' ,marginRight: '.5rem' ,}}  > {element} </div>
                        )
                    })}

                </div>


                <div className = "greenBorderWMargin">
                    {sort.map((element)=>{
                        return(
                            <div key={Math.random()} style={{marginLeft: '.5rem' ,marginRight: '.5rem' ,}}  > {element} </div>
                        )
                    })}

                </div>
            </div>
            </div>
             <Steps contents={branch} toggle={toggleStep} resetGen={resetGenerate}></Steps> 
        </div>
    )
}

export default Level1;
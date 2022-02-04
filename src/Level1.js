import React, { useState } from 'react';

import {mergeSortingAlgo} from  './MergeSort';
import  Steps from './Steps';

const Level1 = (props)=>{


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
        props.goToNext(2);
    }


    function intitiate()
    {
        startSort();
        setGenerate(true);
        setStep(false);

    }

    return(
        <div style={{ display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', margin:'20px'}}>

            <div style={{display: 'flex', flexDirection:'row', margin:'15px', justifyContent:'space-between'}}>
                <div style={{fontSize:'20px', fontWeight:'bold'}}>Level 1</div>
                <button onClick={()=>{intitiate()}} disabled={generate}>Generate  Numbers</button>
            </div>

            <div style={{display:"flex", flexDirection:'row', justifyContent:'center', margin:'15px'}}>
                
            <div style={{display:"flex", flexDirection:'column', justifyContent:'center', margin:'15px'}}>

                <div style={{display:"flex", flexDirection:'row', justifyContent:'center', border: '1px solid green'}}>
                    {unsort.map((element)=>{
                        return(
                            <div key={Math.random()} style={{marginLeft: '.5rem' ,marginRight: '.5rem' ,}}  > {element} </div>
                        )
                    })}

                </div>


                <div style={{display:"flex", flexDirection:'row', justifyContent:'center', border: '1px solid green', marginTop:'10px'}}>
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
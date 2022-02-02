import React, { useState } from 'react';

import Steps from './Steps'

import {mergeSortingAlgo} from './MergeSort'


function Level1(){



    const[sort, setSort]=useState([]);
    const [unsort, setUnSort] = useState([]);
    const[branch, setBranch]  = useState([]);


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

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Level1;
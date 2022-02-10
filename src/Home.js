import React, { useState } from 'react';

import './Home.css';
import Level1 from './Level1/Level1';
import Level2 from './Level2/Level2'



const Home = ()=>
{

    const [levelOne, setOne] = useState(true);
    const [levelTwo, setTwo] = useState(false);
    const [levelThree, setThree] = useState(false);



    function nextLevel(level)
    {
        if(level===1)
        {
            setOne(true);
            setTwo(false);
            setThree(false)
        }
        else if(level===2)
        {
            setOne(false);
            setTwo(true);
            setThree(false);
        }

    }





    return(

        <div className="sorting-tutor">
           <div className="title">Welcome To The Sorting Tutor</div>
           <div name="body">
               
                   
                         {levelOne&&<Level1 goToNext={nextLevel}/>}
                         {levelTwo&&<Level2/>}
                         {}
                     
           </div>
           
        </div>

    );
}

export default Home;
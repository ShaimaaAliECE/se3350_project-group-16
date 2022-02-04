import React, { useState } from 'react';

import './Home.css';
import Level1 from './Level1';



const Home = ()=>
{

    const [levelOne, setOne] = useState(true);
    const [levelTwo, setTwo] = useState(false);
    const [levelThree, setThree] = useState(false);



    function nextLevel()
    {

    }





    return(

        <div className="sorting-tutor">
           <div className="title">Welcome To The Sorting Tutor</div>
           <div name="body">
                     <Level1/>
                     <div>
                         {}
                         {}
                         {}
                     </div>
           </div>
           
        </div>

    );
}

export default Home;
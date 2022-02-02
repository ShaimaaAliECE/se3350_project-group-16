import React, { useState } from 'react';

import './Home.css';
import Level1 from './Level1';



const Home = ()=>
{
    return(

        <div className="sorting-tutor">
           <div className="title">Welcome To The Sorting Tutor</div>
           <div name="body">
                     <Level1/>
           </div>
           
        </div>

    );
}

export default Home;
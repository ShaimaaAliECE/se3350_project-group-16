import React, { useState } from 'react';

function Level1(){
    return(
        <div style={{ display:'flex', flexDirection:'column', height:'100%', justifyContent:'center', margin:'20px'}}>

            <div style={{display: 'flex', flexDirection:'row', margin:'15px', justifyContent:'space-between'}}>
                <div style={{fontSize:'20px', fontWeight:'bold'}}>Level 1</div>
                <button onClick={startSort}>Generate  Numbers</button>
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
             <Steps contents={branch}></Steps> 
        </div>
    )
}
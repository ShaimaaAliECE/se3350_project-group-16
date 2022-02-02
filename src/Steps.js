import React, { useEffect, useState } from 'react';


import { motion } from "framer-motion"
import nextId from "react-id-generator";



const Numbers = (props) =>{

     
    return (
 
        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', margin: '15px', }}>
  
            {
                props.data.map((element, index) => {
                    if (Array.isArray(element[0])) {
                     
                        return (
                            <div key={nextId()} style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', }}>
                                {
                                    
                                     element.map((element2, index1) => {
                                                return <div key={nextId()} style={{}}>
                                                 
                                                  <motion.div
                                                        initial={{opacity:props.toggle?0.0:1.0, backgroundColor:index1===0&&props.data.length===2?'yellow':''}}
                                                        animate={{ opacity: 1.0 }}
                                                        transition={{ ease: "easeIn", duration:1.0, delay:index/3 }}>{element2.join(', ')}</motion.div>
                                           
                                                </div>
                                            })

                                  
                                 
                                }
                            </div>

                        )

                    }

                    else
                    {
                        return <div></div> // gabor enter here
                    }
                

                   


                })
            }
        </div>
    )


}
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
                    else {
                     
                       
                        return (

                            <div key={nextId()} style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-evenly', margin: '15px' }}>
                                
                                <motion.div
                                    initial={{opacity:props.toggle?0.0:1.0}}
                                    animate={{ opacity: 1.0 }}  
                                    transition={{ ease: "easeIn", duration: 1.0, delay:index/3 }}>{element.join(', ')}</motion.div></div>
                        )

                    }

                   

                })
            }
        </div>
    )


}

const Steps = (props) => {

    const [index1, setIndex1] = useState(-1);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);
    const [step, setStep] = useState('');
    const [data, setData] = useState([]);
    const[toggle, setToggle] = useState(true);

    function changeStep(newValue) {
        if (props.contents.length > 0){

        }

        else {
            setStep("byebye")
        }
    }
}

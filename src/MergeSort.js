import React from 'react';
import {useState, useEffect} from 'react'

export function mergeSortingAlgo(unsortedArray){

    let branch=[];



        function merge(left, right)
        {
            let sorted=[];

            let holder=[];
            let data=[];

            let mergeStep1 = 'Merge ' + left + ' with ' + right 
        

            holder.push(mergeStep1);
            data.push([[...left], [...right]]);

            let mergeStep2 = 'Compare the first element of both arrays. '
        

            holder.push(mergeStep2)




            while(left.length&&right.length)
            {
            

                if(left[0]<right[0])
                {
                    let mergeStep3 = left[0] + ' is less than ' + right[0] + ' push ' + left[0] + ' into sorted array first. Shift left array index one element to the left.'
                    holder.push(mergeStep3)
                    data.push([[left[0]],[right[0]]])
            
                    sorted.push(left.shift());
                    data.push([...sorted])
                    
                
                    
                }
                else
                {
                    let mergeStep3 = right[0] + ' is less than ' + left[0] + ' push ' + right[0] + ' into sorted array first. Shift right array index one element to the left.'

                    holder.push(mergeStep3);
                    data.push([[left[0]],[right[0]]])

                    sorted.push(right.shift());
                    data.push([...sorted])

                
                
                }

            
            }

            if(!left.length)
            {
                let mergeStep4="Left array has no more element to compare. Return sorted array with remaining right elements appended.";
            
                holder.push(mergeStep4);
                data.push([...sorted,...left,...right])
            
            }
            else if(!right.length)
            {
                let mergeStep4="Right array has no more elements to compare. Return sorted array with remaining elements in left array appended.";
        
                holder.push(mergeStep4);
                data.push([...sorted,...left,...right])
            
            }

        
        
        branch = [...branch,[[...holder],[...data]]];

        
        

            return [...sorted,...left,...right];
        }
    }
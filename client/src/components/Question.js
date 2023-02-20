import React, { useEffect, useState } from 'react'
import data from './Database/data';


export default function Question() {

    const [checked,setChecked]= useState(undefined);

    const question =data[0];

    useEffect(()=>{
        console.log(data)
    })

    function onSelect(){

        console.log("radio btn changed")
    }


  return (
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>
        <ul key={question.id}>
            {
                question.options.map((q,i)=>(
                    <li key={i}>
                    <input
                       type="radio"
                       value={checked}
                       name="options"
                       id={`${i}-option`}
                       onChange={onSelect()}
                    />
                    <label className='text-primary' htmlFor={`${i}-option`}>{q}</label>
                    <div className='check'></div>
                </li>
                ))
            }
           
        </ul>
    </div>
  )
}

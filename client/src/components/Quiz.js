import React from 'react'
import Question from './Question'

export default function Quiz() {

  function onPrev(){
    console.log('on preview clck')
  }

  function onNext(){
    console.log('on next clck')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'> Quiz Application</h1>

      <Question/>


      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>prev</button>
        <button className='btn next' onClick={onNext}>next</button>

      </div>


    </div>
  )
}

import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';

export default function Result() {
  function onRestart(){
    console.log("restart");
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Daily Tution</span>

        </div>
        <div className='flex'>
          <span>Total Quiz Point :</span>
          <span className='bold'>50</span>

        </div>
        <div className='flex'>
          <span>Total Questions :</span>
          <span className='bold'>05</span>

        </div>
        <div className='flex'>
          <span>UToral Atempts : </span>
          <span className='bold'>02</span>

        </div>
        <div className='flex'>
          <span>Total Earn Poits</span>
          <span className='bold'>30</span>

        </div>
        <div className='flex'>
          <span>Quiz Result</span>
          <span className='bold'>Passed</span>

        </div>
      </div>
      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>
      <div className='container'>
        <ResultTable/>
      </div>

    </div>
    
  )
}

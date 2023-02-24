import React from 'react'
import Expprop from './Expprop'
export default function EXpmap({data}) {
  return (
    <div className='experience-content-detail-container'>
        {data.map((v,i)=>{return <Expprop text={v.text}/>})}
    </div>
  )
}

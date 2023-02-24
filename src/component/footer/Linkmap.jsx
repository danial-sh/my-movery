import React from 'react'
import Linksprop from './linksprop'
export default function Linkmap({data}) {
  return (
    <div className='footer-links'>
        {data.map((v,i)=>{return <Linksprop text={v.text}/>})}
    </div>
  )
}

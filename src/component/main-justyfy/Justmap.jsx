import React from 'react'
import Justprop from './Justprop'
export default function Justmap({data}) {
  return (
    <div>
        {data.map((v,i)=>{return <Justprop text={v.text}/>})}
    </div>
  )
}

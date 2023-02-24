import React from 'react'
import Entdeckeprop from './Entdeckeprop'
export default function Entdeckemap({data}) {
  return (
    <div className='entdeckegp-image d-flex'>
        {data.map((v,i)=>{return <Entdeckeprop img={v.img} text={v.text}/>})}
    </div>
  )
}

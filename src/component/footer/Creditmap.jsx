import React from 'react'
import Creditprop from './Creditprop'
export default function Creditmap({data}) {
  return (
    <div className="credit-cards-icon d-flex align-center">
        {data.map((v,i)=>{return <Creditprop img={v.img} class={v.class}/>})}
    </div>
  )
}

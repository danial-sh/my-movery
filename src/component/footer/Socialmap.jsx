import React from 'react'
import Socialprop from './Socialprop'

export default function Socialmap({data}) {
  return (
    <div className="social-img d-flex">
        {data.map((v,i)=>{return <Socialprop img={v.img}/>})}
    </div>
  )
}

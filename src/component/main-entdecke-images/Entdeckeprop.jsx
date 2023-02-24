import React from 'react'

export default function Entdeckeprop(props) {
  return (
    <div className='entdecke-images radius white-text'>
    <img src={props.img} alt="qwe" />
    <div className='entdecke-content'>
        <p>{props.text}</p>
        <span>15 offer</span>
    </div>
</div>
  )
}

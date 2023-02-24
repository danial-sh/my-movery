import React from 'react'

export default function Detailprop(props) {
  return (
    <div className='search-detail-resize d-flex'>
    <div className='resize-img'>
        <img src={props.img} alt="qwe" />
    </div>
    <div className='resize-content'>
        <h3 className='larg-text'>
        {props.title}
        </h3>
           {props.select}
    </div>
</div>
  )
}

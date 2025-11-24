import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='h-full flex flex-nowrap gap-5 w-2/3 p-4  overflow-x-auto'>
    {props.users.map(function (elem,idx) {
      return <RightCard key={idx} image={elem.image} feedback={elem.feedback} tag={elem.tag} id={elem.id} name={elem.name} color={elem.color}/>
    })}
    </div>
  )
}

export default RightContent

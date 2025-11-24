import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1content = (props) => {
  return (
    <div className='pb-14 px-18 h-[90vh] flex gap-10 items-center'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content

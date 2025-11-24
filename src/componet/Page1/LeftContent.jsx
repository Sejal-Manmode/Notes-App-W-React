
import { ArrowUpRight } from 'lucide-react'
import Herotext from './Herotext'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <Herotext />
      <div><ArrowUpRight  size={60} strokeWidth={2.5} /></div>
    </div>
  )
}

export default LeftContent

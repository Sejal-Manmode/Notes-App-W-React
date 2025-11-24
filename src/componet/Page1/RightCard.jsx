
import RightCardContent from "./RightCardContent"
import RightContent from "./RightContent"

const RightCard = (props) => {
  return (
    <div className='h-full w-60 relative  rounded-4xl overflow-hidden shrink-0'>
        <img className='h-full w-full object-cover' src={props.image} alt="" />
        <RightCardContent feedback={props.feedback} tag={props.tag} id={props.id} name={props.name} color={props.color}/>
    </div>
  )
}

export default RightCard

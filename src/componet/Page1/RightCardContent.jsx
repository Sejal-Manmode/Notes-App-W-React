import { ArrowRight } from "lucide-react"

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <div className="flex items-center gap-3">
                  <h2 className="bg-white font-semibold text-2xl rounded-full h-10 w-10 flex justify-center items-center">{props.id}</h2>
                  <h3 className="text-white font-bold">{props.name}</h3>
                </div>
                <div>
                    <p className="text-base leading-normal text-white font-bold mb-7">{props.feedback}</p>
                <div className="flex items-center gap-1.5">
                <button style={{backgroundColor:props.color}} className=" text-white font-medium px-6 py-2 rounded-full">{props.tag}</button>
                <button style={{backgroundColor:props.color}}  className=" text-white font-semibold px-3 py-2 rounded-full"><ArrowRight strokeWidth={2.5} /></button>
                </div></div>
        </div>
    </div>
  )
}

export default RightCardContent


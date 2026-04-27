import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  
  const submitHandler = (e) =>{
    e.preventDefault();
   

  const copyTask = [...task];
  copyTask.push({title,details})
  
  setTask(copyTask);
  console.log(copyTask)

    setTitle('');
    setDetails(''); 

    
  }
 
  const deleteNote = (idx) =>{
      const copyTask = [...task]
      copyTask.splice(idx,1)

      setTask(copyTask)
    }

  return (
    <div className='h-screen bg-black text-white p-5 lg:flex'> 
      <form onSubmit={(e) => {submitHandler(e)}} 
      className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
        <input className='px-5 py-2 w-full border-2 rounded' type='text' placeholder='Enter notes heading' value={title} onChange={(e)=>setTitle(e.target.value)}/>

      <textarea className='px-5 w-full py-2 border-2 rounded h-20' type='text' placeholder='Enter details' value={details} onChange={(e)=>setDetails(e.target.value)}/>
      <button className='bg-white w-full text-black px-5 py-2 rounded cursor-pointer hover:scale-95 active:bg-amber-900'>Add Note</button>
      </form>
      <div className='lg:w-1/2 p-8 lg:border-l-2'>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-3 overflow-auto h-[90%] whitespace-pre-wrap break-words'>
          {task.map(function(elem,idx){
            return <div key={idx} className="relative flex flex-col justify-between items-start h-52 w-40 bg-cover rounded-2xl text-black p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
              <h3 className='text-xl font-bold leading-tight py-1.5'>{elem.title}</h3>
              <p className='mt-2 font-medium leading-tight'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full text-white bg-red-600 rounded-2xl text-xs font-bold py-1.5 cursor-pointer active:scale-95'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'

const ModalWindow = (props) => {
  const [input, setInput] = useState('')
  const HandleChange = (e) => {
    setInput(e.target.value)
  }
  const HandleSumbit = (e) => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }
  if (props.edit == false) {
    return (
      <form className='absolute top-[215px] space-y-2 rounded-2xl left-[300px] items-center flex flex-col py-5 bg-[#371B58]'>
        <input className='w-[80%]' type='text' placeholder='add new ToDo' value={input} onChange={HandleChange} />
        <button className='text-white' onClick={HandleSumbit}>Add</button>
      </form>
    )
  } else {
    return (
      <form className='absolute top-[215px] space-y-2 rounded-2xl left-[100px] items-center flex flex-col py-5 bg-[#371B58]'>
        <input className='w-[80%]' type='text' placeholder='add new ToDo' value={input} onChange={HandleChange} />
        <button className='text-white' onClick={HandleSumbit}>Edit</button>
      </form>
    )

  }
}

export default ModalWindow

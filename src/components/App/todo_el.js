import { AiFillEdit, AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import ModalWindow from './ModalWindow'

const ToDoEl = (props, func) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const sumbmitUpdate = (value) => {
    props.funcU(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <ModalWindow edit={edit} onSubmit={sumbmitUpdate} />
  }

  return (
    <div className="w-[80%] py-2 rounded-xl flex justify-around items-center bg-[#7858A6]">
      <h4>{props.item.text}</h4>
      <div className="flex space-x-2">
        <AiFillEdit className='cursor-pointer w-5 h-5' onClick={() => setEdit({ id: props.item.id, value: props.item.text })} />
        <AiFillCloseCircle className='cursor-pointer w-5 h-5' onClick={() => props.func(props.item.id)} />
      </div>
    </div>
  )
}
export default ToDoEl

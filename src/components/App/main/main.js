import ToDoEl from '../todo_el'

const Main = (props) => {
  return (
    <div className="flex flex-col bg-[#5B4B8A] w-[415px] shadow-inner shadow-black justify-center items-center py-16 space-y-3">
      {props.todos.map((el, id) => <ToDoEl item={el} func={props.func} funcU={props.funcU} key={id++} />)}
    </div>
  )
}

export default Main

import { PureComponent } from "react"

class Header extends PureComponent {
  render() {
    return (
      <header className="bg-[#4C3575] shadow-black border-none shadow-md rounded-t-lg p-5 border w-[415px] flex justify-between items-center">
        <h3 className="text-[#FFF] font-semibold">ToDo APP <p>by SorokSkull</p></h3>
        <button className="text-[#FFF]">Click Me</button>
        <h3 className="text-[#FFF] font-semibold">List of Tasks: <p>Number</p></h3>
      </header>
    )
  }
}

export default Header;

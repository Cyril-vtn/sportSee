import "../styles/sidebar.css"
import bike from "../assets/bike.png"
import swimming from "../assets/swimming.png"
import weight from "../assets/weight.png"
import yoga from "../assets/yoga.png"

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <img src={yoga} alt="" />
        <img src={swimming} alt="" />
        <img src={bike} alt="" />
        <img src={weight} alt="" />
      </div>
      <p className="copiryght">Copiryght, SportSee 2020</p>
    </div>
  )
}

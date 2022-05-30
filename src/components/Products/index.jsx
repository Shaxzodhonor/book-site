import "./style.scss";

// components
import Card from "../Card"

// carusel
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Products (){

  return(
    <div className="products container">
      <div className="nav-wrap">
        <div className="title">Горячие поступления</div>
        <ul className="nav">
          <li className="items">Фантастика</li>
          <li className="items">Фантастика</li>
          <li className="items">Фантастика</li>
          <li className="items">Фантастика</li>
          <li className="items">Фантастика</li>
          <li className="items">Другие</li>
        </ul>
      </div>
      <Card />
    </div>
  )
}

export default Products;
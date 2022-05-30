import "./style.scss";

// components
import Card from "../Card"
import Carousel from "../Carousel";



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
      <Carousel></Carousel>
    </div>
  )
}

export default Products;

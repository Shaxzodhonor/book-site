import "./style.scss";

// components
import Card from "../Card"
import Carousel from "../Carousel";

// images
import Book1 from "../../assets/images/book-1.png"
import Book2 from "../../assets/images/book-2.png"
import Book3 from "../../assets/images/book-3.png"
import Book4 from "../../assets/images/book-4.png"

function Products (){
  
  const array = [Book1, Book2, Book3,Book4]
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
      <Carousel array={array}></Carousel>
      <h2 className="title" style={{textAlign: "center", margin: "40px"}}>Распродажа</h2>
      <Carousel></Carousel>
    </div>
  )
}

export default Products;

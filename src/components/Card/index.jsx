import "./style.scss";

// images
import Lovely from "../../assets/images/lovely.png"


function Card (){

  return(
    <div className="card">
      <img src="" alt="" width={134} height={190} />
      <span className="price">300 грн.</span>
      <h3 className="title">Порядок в Хаосе</h3>
      <span className="author">Константин Коптелов</span>
      <div className="button-wrap">
        <button type="button" className="basket">В корзину</button>
        <button type="button" className="lovely">
          <img src={Lovely} alt="" width={29} height="29"/>
        </button>
      </div>
    </div>
  )
}

export default Card;
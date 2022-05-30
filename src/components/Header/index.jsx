import "./style.scss";

// images
import Logo from "../../assets/images/logo.svg"
import Search from "../../assets/images/search.png"
import Lovely from "../../assets/images/lovely.png"
import Basket from "../../assets/images/cil_cart.png"

function Header() {

  return(
    <header>
      <div className="container wrapper">
        <img src={Logo} alt="site logo" />
        <ul className="menu">
          <li className="item">
            <a href="#">Акции</a>
          </li>
          <li className="item">
            <a href="#">Каталлог</a>
          </li>
          <li className="item">
            <a href="#">Доставка</a>
          </li>
          <li className="item">
            <a href="#">О магазине</a>
          </li>
          <li className="item">
            <a href="#">Блог</a>
          </li>
        </ul>
        <div className="search">
          <label htmlFor="site_seacrh_id">
            <img src={Search} alt="" width={14} height={14}/>
          </label>
          <input type="search" id="site_seacrh_id" placeholder="Поиск"/>
        </div>
        <div className="selected-wrap">
          <button type="button">
            <img src={Lovely} alt="icon" width={38} height={38}/>
          </button>
          <div className="basket-wrap">
            <button>
              <img src={Basket} alt="icon" width={38} height={37} />
            </button>
            <select name="bascet" className="amount">
              <option value="">222</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
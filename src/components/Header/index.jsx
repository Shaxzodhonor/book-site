import "./style.scss";

// images
import Logo from "../../assets/images/logo.svg"
import Search from "../../assets/images/search.png"

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
      </div>
    </header>
  )
}

export default Header;
import "./style.scss";
// images
import Logo from "../../assets/images/footer-logo.svg"
import { Link } from "react-router-dom";

function Footer (){

  return(
    <footer id="footer">
      <div className="wrapper container">
        <img src={Logo} alt="site logo" />
        <ul className="items">
          <li className="item">
            <div className="nav-title">Популярное</div>
            <ul className="nav-items">
              <li className="nav-item">
                <Link to={"/"}>Программирование</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"}>Книги для детей</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"}>Психология</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"}>Бизнес</Link>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="nav-title">Информация</div>
            <ul className="nav-items">
              <li className="nav-item">
                <a href="#delivery">Доставка</a>
              </li>
              <li className="nav-item">
                <a href="#">Оплата</a>
              </li>
              <li className="nav-item">
                <a href="#about">O магазине
</a>
              </li>
            </ul>
          </li>
          <li className="item">
            <div className="nav-title">Помощь</div>
            <ul className="nav-items">
              <li className="nav-item">
                <Link to={"/"}>Контакты</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"}>Возврат товара</Link>
              </li>
              <li className="nav-item">
                <Link to={"/"}>Помощь покупателю</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="phone-wrapper">
          <div className="number">+38 (071) 339-16-26</div>
          <a className="phone-button" href="tel:+998901234567">Заказать звонок</a>
        </div>
      </div>
      <div className="footer-text">Все права защищены © 2003-2021 БИБЛИОТЕЧНАЯ          Условия использования | Политика конфиденциальности</div>
    </footer>
  )
}

export default Footer;
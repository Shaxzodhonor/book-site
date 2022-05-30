import "./style.scss";

function Catalog (){

  return(
    <div id="catalog" className="container">
      <h2 className="title">Каталог</h2>
      <ul className="items">
        <li className="item">Книги</li>
        <li className="item">Электронные книги</li>
        <li className="item">Аудиокниги</li>
        <li className="item">Игрушки, творчество</li>
        <li className="item">Книжные аксессуарые</li>
        <li className="item">Блокноты</li>
        <li className="item">Настольные игрые</li>
        <li className="item">Подарки</li>
        <li className="item">Акции</li>
      </ul>
    </div>
  )
}

export default Catalog;
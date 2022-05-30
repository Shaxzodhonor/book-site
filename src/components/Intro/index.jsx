import "./style.scss";

// images

function Intro() {

  return(
  <div id="intro" className="container">
    <div className="left">
      <h1 className="title">Киниги от  А до Я</h1>
      <div className="subtitle">В нашем магазине можно найти книгу на любой вкус. Большой ассортимент. Приятные цены. Интересные сюжеты.</div>
      <button type="button">Перейти в каталог</button>
    </div>
    <div className="right"></div>
  </div>
  )
}

export default Intro;
import "./style.scss";

// components

function About (){

  return(
    <div className="container" id="about">
      <h2 className="title">О магазине</h2>
      <ul className="items">
        <li className="item">
          <span className="index">35</span>
          <span className="text">Филиалов по всей стране</span>
        </li>
        <li className="item">
          <span className="index">35</span>
          <span className="text">Филиалов по всей стране</span>
        </li>
        <li className="item">
          <span className="index">35</span>
          <span className="text">Филиалов по всей стране</span>
        </li>
        <li className="item">
          <span className="index">35</span>
          <span className="text">Филиалов по всей стране</span>
        </li>
      </ul>
    </div>
  )
}

export default About;
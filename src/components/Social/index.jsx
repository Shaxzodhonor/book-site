import "./style.scss";

// images
import Facebook from "../../assets/images/facebook-fill.png"
import Twitter from "../../assets/images/twitter-fill.png"
import Vkm from "../../assets/images/cib_vk.png"
import Instagram from "../../assets/images/instagram.png"
import youtube from "../../assets/images/youtube.png"
// import
function Social (){

  return(
    <section id="social" className="container">
      <h2 className="title">Следите за нами в социальных сетях</h2>
      <ul className="items">
        <li className="item">
          <a href="#">
          <img src={Facebook} alt="FACEBOOK icon" width={63} height={63}/>
          </a>
        </li>
        <li className="item">
          <a href="#">
          <img src={Twitter} alt="Twitter icon" width={63} height={63}/>
          </a>
        </li>
        <li className="item">
          <a href="#">
          <img src={Vkm} alt="vkm icon" width={63} height={63}/>
          </a>
        </li>
        <li className="item">
          <a href="#">
          <img src={Instagram} alt="Instagram icon" width={63} height={63}/>
          </a>
        </li>
        <li className="item">
          <a href="#">
          <img src={youtube} alt="you tube icon" width={63} height={63}/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Social;
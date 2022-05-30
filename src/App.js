import './App.scss';
import About from './components/About';
import Catalog from './components/Catalog';
import Delivery from './components/Delivery';
import Footer from './components/Footer';

//pages
import Header from './components/Header'; 
import Intro from './components/Intro';
import Products from './components/Products';
import Social from './components/Social';
import { Switch, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"}>
          <Header />
          <Intro />
          <Products />
          <Catalog />
          <About />
          <Delivery />
          <Social />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

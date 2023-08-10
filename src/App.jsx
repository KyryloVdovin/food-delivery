import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import { Route, Routes } from "react-router-dom";
import BurgerContainer from './components/burger/burger-container';

const App = (props) => {
  return (

    <div className="App">
      <Header />

      <main>
        <Navigation />
        <section className='catalog'>
          <div className='container catalog-container'>
            <Routes>
              {/* <Route exact path='/' element={<Navigate to="/profile" />} /> */}
              <Route path="/Burgers" element={<BurgerContainer />} />
              <Route path="/Pizza" element={<div>pizza</div>} />
              <Route path="/Desserts" element={<div>desserts</div>} />
              <Route path="/Chiken" element={<div>chiken</div>} />
              <Route path="/Drinks" element={<div>drinks</div>} />
              <Route path="/Sandviches" element={<div>sandvich</div>} />
              <Route path="/Ice-cream" element={<div>ice cream</div>} />
              <Route path="/Steak" element={<div>steak</div>} />
            </Routes>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

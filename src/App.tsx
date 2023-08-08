import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';
import { BrowserRouter, HashRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import BurgerContainer from './components/burger/burger-container';
import { Provider } from 'react-redux';
import store from './components/redux/redux-store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <main>
          <Navigation />

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
        </main>
      </div>
    </Provider>
  );
}

export default App;

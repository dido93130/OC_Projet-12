// App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import './styles/main.scss'; // Import main.scss here

const Dashboard = () => {
  return (
    <>          
      <Header/> 
      <Outlet/> {/* Cet Outlet va rendre les composants des routes enfants */}    
      <Footer/>      
    </>
  );
};

const App = () => {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route index element={<HomePage/>} />          
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
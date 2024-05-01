// App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import './styles/main.scss'; // Import main.scss here

const App = () => {  
  return (
       <div>    
       <Header/>
       <HomePage/>          
       <Footer/> 
      </div>
  )
}

export default App;
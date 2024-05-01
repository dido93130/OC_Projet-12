import React from 'react'; // Import de la bibliothèque React
import About from '../components/AboutMe';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

// Composant HomePage pour la page d'accueil
const HomePage = () => {    
  
    return (
      <div> {/* Conteneur principal de la page d'accueil */}
        <main className="main"> {/* Section principale de la page */} 
           <About />          
           <Skills />          
           <Experience />          
           <Education />         
           <Portfolio />         
           <Contact />          
        </main>      
      </div>
    );
  };
  
  export default HomePage; // Export du composant HomePage
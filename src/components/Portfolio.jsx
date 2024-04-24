// Portfolio.jsx

import React from 'react';
import { Tooltip } from 'react-tooltip';

const Portfolio = () => {
    return (
    <section id='portfolio'>
      <div className="container">     
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className='title'>Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
          <a href="/projets/Projet_Snake/index.html" data-tooltip-id="my-tooltip" data-tooltip-content="Jeu du Serpent - JAVASCRIPT">
              <img src="images/serpent.webp" className="img-thumbnail" alt="jeu du serpent" />
            </a>
            <Tooltip id="my-tooltip"/>
          </div>
          <div className="col-md-4">
            <a href="/projets/TravelAgency/index%20.html" target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content="Site d'une agence de voyage - HTML & CSS">
              <img src="images/voyage.webp" className="img-thumbnail" alt="site voyage" />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
          <div className="col-md-4">
            <a href="/projets/Top_actrices/index.html" target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content="Site top actrices - HTML & CSS">
              <img src="images/actrices.webp" className="img-thumbnail" alt="top5 actrices" />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="/projets/BurgerCode/index.html" target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content="Site de vente de burger - PHP">
              <img src="images/burger.webp" className="img-thumbnail" alt="BurgerCode" />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
          <div className="col-md-4">
            <a href="javascript:void(0)" data-tooltip-id="my-tooltip" data-tooltip-content="Site de vente de burger - Page administrateur - PHP">
              <img src="images/burger_admin.webp" className="img-thumbnail" alt="burger admin" />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
          <div className="col-md-4">
            <a href="/projets/SITE/index.html" target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content="Site basique - HTML & CSS">
              <img src="images/zozor.webp" className="img-thumbnail" alt="site zozor" />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="/projets/Booki/index.html" target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content="Project 3 OpenClassroom  - Booki -
             Créez la page d'accueil d'une agence de voyage avec HTML & CSS">
              <img src="images/Booki.webp" className="img-thumbnail" alt="site Booki" />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
          <div className="col-md-4">
            <a href="/projets/OhMyFood/index.html" target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content="Project 4 OpenClassroom  - Ohmyfood -
               Améliorez l'interface d'un site mobile avec des animations CSS">
              <img src="images/OhMyFood.webp" className="img-thumbnail" alt="site Ohmyfood" />
              <Tooltip id="my-tooltip" />  
            </a>
          </div>
          <div className="col-md-4">
            <a href="/projets/Print-it/index.html" target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content="Project 5 OpenClassroom  - Print it -
               site internet statique d'une imprimerie avec un carrousel interactif - JAVASCRIPT">
              <img src="images/Print-it.webp" className="img-thumbnail" alt="site Print-it" />
            </a>
            <Tooltip id="my-tooltip" />
          </div>
        </div>
      </div>      
    </section>
  );
};

export default Portfolio;

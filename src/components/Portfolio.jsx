import React from 'react';
import { Tooltip } from 'react-tooltip';

const Portfolio = () => {
  const handleItemClick = (event) => {
    event.preventDefault();
  };

  return (
    <section id='portfolio' className='portfolio'>
      <div className="container">
        <div className="white-divider"></div>
        <div className="heading">
          <h2 className='title second-color'>Portfolio</h2>
        </div>
        <div className="row">
          <PortfolioItem
            imagePath="images/serpent.webp"
            projectUrl="/OC_Projet-12/projets/Projet_Snake/index.html"
            tooltipContent="Jeu du Serpent - JAVASCRIPT"
          />
          <PortfolioItem
            imagePath="images/voyage.webp"
            projectUrl="/OC_Projet-12/projets/TravelAgency/index%20.html"
            tooltipContent="Site d'une agence de voyage - HTML & CSS"
          />
          <PortfolioItem
            imagePath="images/actrices.webp"
            projectUrl="/OC_Projet-12/projets/Top_actrices/index.html"
            tooltipContent="Site top actrices - HTML & CSS"
          />
        </div>
        <div className="row">
          <PortfolioItem
            imagePath="images/burger.webp"
            projectUrl="/OC_Projet-12/projets/BurgerCode/index.html"
            tooltipContent="Site de vente de burger - PHP"
          />
          <PortfolioItem
            imagePath="images/burger_admin.webp"
            projectUrl="#"
            onClick={handleItemClick}
            tooltipContent="Site de vente de burger - Page administrateur - PHP"
          />
          <PortfolioItem
            imagePath="images/zozor.webp"
            projectUrl="/OC_Projet-12/projets/SITE/index.html"
            tooltipContent="Site basique - HTML & CSS"
          />
        </div>
        <div className="row">
          <PortfolioItem
            imagePath="images/Booki.webp"
            projectUrl="/OC_Projet-12/projets/Booki/index.html"
            tooltipContent="Project 3 OpenClassroom:  Booki 
            Créez la page d'accueil d'une agence de voyage avec HTML & CSS
           - capacité à créer des interfaces web responsives
           - intégrer des maquettes avec précision en utilisant HTML et CSS"
          />
          <PortfolioItem
            imagePath="images/OhMyFood.webp"
            projectUrl="/OC_Projet-12/projets/OhMyFood/index.html"
            tooltipContent="Project 4 OpenClassroom:   Ohmyfood 
            Améliorez l'interface d'un site mobile avec des animations CSS
           - capacité à créer des interfaces web mobile-first
           - maîtrise de Sass pour structurer et optimiser le CSS
           - capacité à utiliser Git et GitHub pour la gestion de version et la collaboration sur des projets"
          />
          <PortfolioItem
            imagePath="images/Print-it.webp"
            projectUrl="/OC_Projet-12/projets/Print-it/index.html"
            tooltipContent="Project 5 OpenClassroom:  Print it: 
            Site internet statique d'une imprimerie avec un carrousel interactif 
           - Savoir programmer en JavaScript
           - capacité à combiner JavaScript avec HTML et CSS"
          />
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({ imagePath, projectUrl, tooltipContent, onClick }) => {
  return (
    <div className="col-md-4 portfolio-col">
       <a href={projectUrl} onClick={onClick} target="_blank" data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent}>
        <img src={imagePath} className="img-thumbnail" alt={tooltipContent} />
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Portfolio;
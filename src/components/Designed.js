import React from 'react';
import { Link } from "react-router-dom";
import { designedProjects } from '../utils/projects';
import LinkToProject from './LinkToProject';

function Designed() {

  return (
    <section className="projects">
      <div className="projects__container">

        <h1 className="projects__heading">Примеры проектов</h1>
        <p className="projects__paragraph">Каждый жилой дом проектируется индивидуально, исходя из особенностей участка и потребностей заказчика. Здесь вы можете посмотреть примеры некоторых наших проектов, чтобы вам было от чего отталкиваться. Или, если хотите, посмотрите на <Link to="/built">дома, уже построенные нами</Link>.</p>
        <div className="projects__gallery">
          {designedProjects.map((project, index) => {
            return <LinkToProject key={index} project={project} category={'designed'} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Designed;
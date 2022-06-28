import React from 'react';
import { Link } from "react-router-dom";
import { builtProjects } from '../utils/projects';
import LinkToProject from './LinkToProject';

function Built() {

  return (
    <section className="projects">
      <div className="projects__container">

        <h1 className="projects__heading">Реализованные объекты</h1>
        <p className="projects__paragraph">Начиная с 1992 года, когда мы ступили на свой архитектурный путь, по нашим
          проектам было построено более 999 индивидуальных жилых домов. Здесь Вы можете ознакомиться с некоторыми из наших работ, воплощённых в жизнь, либо, если Вам интересно, <Link to="/designed">посмотреть примеры других проектов</Link>.</p>
        <div className="projects__gallery">
          {builtProjects.map((project, index) => {
            return <LinkToProject key={index} project={project} category={'built'} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Built;
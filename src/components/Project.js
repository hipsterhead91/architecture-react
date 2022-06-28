import React from 'react';
import { useParams } from "react-router-dom";
import { designedProjects, builtProjects } from '../utils/projects';

// То, как сейчас компонент Project получает данные о проекте - так себе решение. Нужно переписать его, используя либо 
// пропсы, либо какой-то глобальный стейт, я не знаю. Но пока оставляю как есть.

function Project() {

  const projectId = useParams().id;

  let project;
  project = designedProjects.find(item => item.id == projectId);
  if (project === undefined) project = builtProjects.find(item => item.id == projectId);

  return (
    <section className="project">
      <div className="project__container">
        <div className="project__info">
          <h1 className="project__heading">{project.name}</h1>
          <p className="project__paragraph"><span className="project__subheading">Описание:</span>{project.description}</p>
          <p className="project__paragraph"><span className="project__subheading">Общая площадь:</span>{project.totalArea}</p>
          <p className="project__paragraph"><span className="project__subheading">Площадь застройки:</span>{project.buildingArea}</p>
          <p className="project__paragraph"><span className="project__subheading">Жилая площадь:</span>{project.livingArea}</p>
          <span className="project__subheading">Строительные конструкции и материалы:</span>
          <ul className="project__details">
            {project.details.map((detail, index) => {
              return (<li key={index+1} className="project__detail">{detail}</li>);
            })}
          </ul>
        </div>
        <div className="project__gallery-container">
          <div className="project__gallery">
            {/* сюда будем рендерить картинки, но сперва надо определиться, как я буду их отображать - сам напишу логику
            с каким-то попапом, или подключим какую-нибудь готовую библиотечку для галереи. Теоретически, можно использовать
            ту, которая сейчас юзается в компоненте MainPage для блока gallery, но там карусель, и я не уверен что она подходит
            сюда чисто с точки зрения дизайна и UI. Тут бы лучше какой-то грид с модальным окном по клику на пикчу. */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project;
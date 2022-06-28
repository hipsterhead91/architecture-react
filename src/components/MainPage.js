import React from 'react';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function MainPage() {

  function handleArrowAppearance(event) {
    let arrow;

    if (event.target.classList.contains('page-link')) {
      arrow = event.target.querySelector('.page-link__arrow');
    } else {
      arrow = event.target;
    }

    if (arrow.classList.contains('page-link__arrow_hidden')) {
      arrow.classList.remove('page-link__arrow_hidden');
    } else {
      arrow.classList.add('page-link__arrow_hidden');
    }
  }

  return (
    <section className="main-page">

      {/* INTRO */}
      <div className="intro">
        <div className="intro__container">
          <div className="intro__info">
            <h1 className="intro__heading">Красивый рекламный слоган, чтобы привлечь внимание клиента.</h1>
            <p className="intro__paragraph">Не очень длинный, но в меру живописный текст, вкратце описывающий преимущества
              сотрудничества с нашей фирмой и особенности работы. Призван коротко, но ёмко объяснить, что мы делаем, и
              убедить клиента изучить наш сайт дальше. Цветовой акцент подчёркивает особо важную информацию.</p>
            <Link className="page-link page-link_small" to="built" onMouseEnter={handleArrowAppearance} onMouseLeave={handleArrowAppearance}>Посмотреть наши работы<span
              className="page-link__arrow page-link__arrow_hidden"> -&#62;</span></Link>
          </div>
          <div className="intro__image"></div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="about">
        <div className="about__container">
          <h2 className="about__heading">Наша идея</h2>
          <div className="about__text">
            <p className="about__paragraph">К концу зимы толщина льда на Байкале достигает 1 м, а в заливах — 1,5—2 м. При
              сильном морозе трещины, имеющие местное название «становые щели», разрывают лёд на отдельные поля. Длина
              таких трещин — 10—30 км, а ширина — 2—3 м. Разрывы происходят ежегодно, примерно в одних и тех же районах
              озера. Сопровождаются они громким треском, напоминающим раскаты грома или выстрелы из пушек. Благодаря
              трещинам во льду рыба на озере не гибнет от недостатка кислорода. Байкальский лёд, кроме того, очень
              прозрачен, и сквозь него проникают солнечные лучи, поэтому в воде бурно развиваются планктонные водоросли,
              выделяющие кислород. По берегам Байкала можно наблюдать зимой ледяные гроты и набрызги.</p>
            <p className="about__paragraph">Байкальский лёд преподносит учёным немало загадок. Так, в 1940-х годах
              специалисты Байкальской лимнологической станции обнаружили необычные формы ледового покрова, характерные
              только для Байкала. Например, «сопки» — конусовидные ледяные холмы высотой до 6 м, полые внутри. Внешним
              видом они напоминают ледяные шатры, «открытые» в противоположную от берега сторону. Сопки могут
              располагаться по отдельности, а иногда образуют миниатюрные «горные хребты». Также на Байкале существуют
              ещё несколько видов льда: «сокуй», «колобовник», «осенец».</p>
            <p className="about__paragraph">Весной 2009 года два ледовых кольца были сфотографированы с МКС и распространены
              в Интернете. На спутниковых снимках на разных участков Байкала чётко выделялись тёмные кольца. По мнению
              учёных, эти кольца возникают благодаря подъёму глубинных вод и повышению температуры поверхностного слоя
              воды в центральной части кольцевой структуры. В результате этого процесса образуется антициклоническое (по
              часовой стрелке) течение. В зоне, где течение достигает максимальных скоростей, усиливается вертикальный
              водообмен, что приводит к ускоренному разрушению ледового покрова.</p>
            <Link className="page-link" to="designed" onMouseEnter={handleArrowAppearance} onMouseLeave={handleArrowAppearance}>Перейти к проектам<span className="page-link__arrow page-link__arrow_hidden"> -&#62;</span></Link>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="gallery">
        <div className="gallery__container">
          <Swiper
            className="gallery__slider"
            modules={[Autoplay, Navigation]}
            autoplay={true}
            slidesPerView={1}
            speed={800}
            loop={true}
            navigation={{
              nextEl: '#swiper-next-button',
              prevEl: '#swiper-prev-button',
            }}
          >
            <SwiperSlide id="gallery-slide-1" className="gallery__slide">
              <div className="gallery__slide-text">
                <h3 className="gallery__slide-heading">Природные особенности</h3>
                <p className="gallery__slide-paragraph">Тело косы состоит из песка, покрытого тонким (в несколько
                  сантиметров толщиной) растительным слоем. Образование этого слоя происходило в течение многих
                  десятилетий.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide id="gallery-slide-2" className="gallery__slide">
              <div className="gallery__slide-text">
                <h3 className="gallery__slide-heading">История</h3>
                <p className="gallery__slide-paragraph">В X—XI веках на Куршской косе существовало поселение викингов.
                  Оно находилось рядом с нынешним посёлком Рыбачий.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide id="gallery-slide-3" className="gallery__slide">
              <div className="gallery__slide-text">
                <h3 className="gallery__slide-heading">Этимология</h3>
                <p className="gallery__slide-paragraph">Впервые Куршская коса в орденских письменных источниках в 1258
                  году упоминается под именем Нестланд (нем. Nestland) — «Страна гнёзд»</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="gallery__navigation">
            <button id="swiper-prev-button" className="gallery__nav-button" />
            <button id="swiper-next-button" className="gallery__nav-button" />
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="services">
        <div className="services__container">
          <span className="services__subtitle">Особенности нашей работы</span>
          <h2 className="services__heading">Заказав у нас проект, вы получаете</h2>
          <ul className="services__list">
            <li className="services__list-element">
              <div id="services-icon-1" className="services__icon"></div>
              <h3 className="services__subheading">Расположение тайги</h3>
              <p className="services__paragraph">Тайга располагается в умеренно влажной географической зоне. Основой
                растительной жизни тайги являются хвойные деревья.</p>
            </li>
            <li className="services__list-element">
              <div id="services-icon-2" className="services__icon"></div>
              <h3 className="services__subheading">Происхождение топонима</h3>
              <p className="services__paragraph">Анализ языковых контактов первых русских поселенцев в регионе указывает,
                что
                топоним, по всей вероятности, был усвоен из башкирского языка.</p>
            </li>
            <li className="services__list-element">
              <div id="services-icon-3" className="services__icon"></div>
              <h3 className="services__subheading">Этимология</h3>
              <p className="services__paragraph">Впервые Куршская коса в орденских письменных источниках в 1258 году
                упоминается под именем Нестланд (нем. Nestland) — «Страна гнёзд».</p>
            </li>
          </ul>
        </div>
      </div>

      {/* DETAILS */}
      <div className="details">
        <div className="details__container">
          <div className="details__overlay"></div>
          <p className="details__paragraph">Хотите подробнее узнать о стоимости и сроках работы, уточнить любые другие детали?
            Свяжитесь с нами:</p>
          <a className="details__contact" href="tel:+79114447755">+7 (911) 444 77 55</a>
        </div>
      </div>

    </section>
  )
}

export default MainPage;
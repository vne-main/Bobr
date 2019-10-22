import React, { useEffect } from 'react';
import './style.css';

/* Function */
import { changePage } from 'Requsets/function';

/* Img */
import imgScreen1 from 'Static/img/about/screen_1.jpg';
import imgScreen2 from 'Static/img/about/screen_2.jpg';
import imgScreen3 from 'Static/img/about/screen_3.jpg';
import imgScreen4 from 'Static/img/about/screen_4.jpg';
import imgScreen5 from 'Static/img/about/screen_5.jpg';

const arrayScreen = [
  { title: 'Главная', img: imgScreen1 },
  { title: 'Пользователи', img: imgScreen2 },
  { title: 'Пост', img: imgScreen3 },
  { title: 'Разное', img: imgScreen4 },
  { title: 'Чат', img: imgScreen5 },
];

const About = () => {
  useEffect(() => {
    changePage('about');
  }, []);

  return (
    <section>
      <h3 className="title_h3 title_pages">О сайте</h3>
      <div className="about_container">
        {arrayScreen.map((el, i) => {
          return (
            <aside className="about_box" key={i}>
              <img src={el.img} alt="screen" />
              <h4>{el.title}</h4>
            </aside>
          );
        })}
      </div>
    </section>
  );
};

export default About;

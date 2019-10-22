import React from 'react';
import './style.css';

/* IMG */
import spImg1 from 'Static/img/sponsor/sponsor_1.jpg';
import spImg2 from 'Static/img/sponsor/sponsor_2.jpg';
import spImg3 from 'Static/img/sponsor/sponsor_3.jpg';

const Sponsors = () => {
  const sponsors = [
    { title: 'УрГЭУ', text: 'Уральский государственный экономический университет', img: spImg1 },
    { title: 'Компьютеры', text: 'Устройство для написания хорошего кода', img: spImg2 },
    { title: 'Поставленные цели', text: 'Реализация задуманных целей', img: spImg3 },
  ];

  return (
    <div className="right_column_box">
      <h3>Спонсоры Бобра</h3>
      {sponsors.map((el, i) => {
        return (
          <div className="sponsor_box" key={i}>
            <div className="title_sponsor">
              <h5>{el.title}</h5>
              <img src={el.img} alt="sponsorImg" />
            </div>
            <p>{el.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sponsors;

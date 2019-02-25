import React, {Component} from 'react';
import './style.css';

/* IMG */
import spImg1 from "../../../Static/img/sponsor/sponsor_1.jpg";
import spImg2 from "../../../Static/img/sponsor/sponsor_2.jpg";
import spImg3 from "../../../Static/img/sponsor/sponsor_3.png";

export default class Sponsors extends Component {
    state = {
        sponsors: [
            {title: "Мой компьютер", text: "Компьютер, на котором я пишу этот код", img: spImg1},
            {title: "Хорошее настроение", text: "Хорошее настроение - ключ к успеху", img: spImg2},
            {title: "Поставленные цели", text: "Достинув цели, не нужно останавливаться", img: spImg3},
        ],
    };

    render() {
        const {sponsors} = this.state;
        return (
            <div className="right_column_box">
                <h3>Спонсоры Бобра</h3>
                {sponsors.map((el, i) => {
                    return (
                        <div className="sponsor_box" key={i}>
                            <div className="title_sponsor">
                                <h5>{el.title}</h5>
                                <img src={el.img} alt="sponsorImg"/>
                            </div>
                            <p>{el.text}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
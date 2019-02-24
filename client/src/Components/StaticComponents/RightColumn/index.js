import React, {Component} from 'react';
import './style.css';
import axios from 'axios';

import spImg1 from '../../../Static/img/sponsor/sponsor_1.jpg'
import spImg2 from '../../../Static/img/sponsor/sponsor_2.jpg'
import spImg3 from '../../../Static/img/sponsor/sponsor_3.png'

export default class RightColumn extends Component {

    state = {
        sponsors: [
            {title: "Мой компьютер", text: "Компьютер, на котором я пишу этот код", img: spImg1},
            {title: "Хорошее настроение", text: "Хорошее настроение - ключ к успеху", img: spImg2},
            {title: "Поставленные цели", text: "Достинув цели, не нужно останавливаться", img: spImg3},
        ],
        gifBackground: "",
    };

    getGif() {
        let refresh;
        const duration = 1000 * 10;
        const giphy = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            key: "dc6zaTOxFJmzC",
            tag: "fail",
            type: "random",
            rating: "pg-13"
        };

        let giphyURL = encodeURI(
            giphy.baseURL +
            giphy.type +
            "?api_key=" +
            giphy.key +
            "&tag=" +
            giphy.tag +
            "&rating=" +
            giphy.rating
        );

        let newGif = () => {
            axios.get(giphyURL).then(
                res => {
                    this.setState({
                        gifBackground: res.data.data.image_original_url
                    });
                    refreshRate();
                }
            );
        };

        let refreshRate = () => {
            clearInterval(refresh);
            refresh = setInterval(function() {
                newGif();
            }, duration);
        };
        newGif();
    }

    componentWillMount() {
        // this.getGif()
    }

    render() {

        const bannerStyle = {
            backgroundImage: `url(${this.state.gifBackground})`,
            backgroundSize: 'cover',
        };

        return (
            <section className="main_right">
                <div className="right_column_box advertising" style={bannerStyle}/>
                <div className="right_column_box">
                    <h3>Спонсоры Бобра</h3>
                    {this.state.sponsors.map((el, i) => {
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
                <div className="right_column_box">
                    <h3>Потоки</h3>
                    <ol className="right_streams_list">
                        <li>Разработка</li>
                        <li>Дизайн</li>
                        <li>Разное</li>
                        <li>Маркетинг</li>
                        <li>Управление</li>
                    </ol>
                </div>
            </section>
        )
    }
}
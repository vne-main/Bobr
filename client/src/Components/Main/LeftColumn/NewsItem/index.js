import React, {Component} from 'react';
import './style.css';
import Icon from '../../../../Static/img/icon.png';

export default class NewsItem extends Component {
    render(){
        return(
            <section className="news_item">
                <div className="top_news">
                    <div className="user_icon">
                        <img src={Icon} alt=""/>
                    </div>
                    <p className="user_name">User Name</p>
                    <p className="news_time">вчера в 16:00</p>
                </div>
                <h1 className="title_news">
                    Название новости
                </h1>
                <div className="heading_news">
                    <p>DIY или Сделай сам</p>
                    <p>Машинное обучение</p>
                    <p>Работа с видео</p>
                </div>
                <div className="text_news">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam aut, autem consectetur dolore doloribus, dolorum
                    earum est et eum facilis ipsam ipsum minima nam natus nisi
                    quisquam temporibus ullam velit.
                </div>
                <span className="news_more">
                    Читать дальше →
                </span>
                <div className="news_stats">
                    <div className="news_vote">

                        <i>+22</i>
                        <i>+1</i>
                    </div>
                    <div className="news_favorite">
                        233
                    </div>
                    <div className="news_favorite">
                        233
                    </div>
                    <div className="news_favorite">
                        233
                    </div>
                </div>
            </section>
        )
    }
}
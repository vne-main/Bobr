import React, {Component} from 'react';
import './style.css';

export default class RightColumn extends Component {
    render() {
        return (
            <section className="main_right">
                <div className="advertising">
                    Банер для рекламы
                </div>
                <div className="right_streams">
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
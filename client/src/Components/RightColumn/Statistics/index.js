import React, {Component} from 'react';
import './style.css';

export default class Statistics extends Component {

    state = {
        statistics : [
            {title: "Всего", value: 4},
            {title: "Мужчины", value: 2},
            {title: "Женщины", value: 1},
            {title: "Остальные", value: 1},
        ]
    };

    render() {
        const {statistics} = this.state;
        return (
            <div className="right_column_box">
                <h3>Статистика</h3>
                <ol className="right_statistics_list">
                    {statistics.map((el, i) => {
                        return (
                            <li key={i}>
                                <i>{el.title}</i>
                                <span>{el.value}</span>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}
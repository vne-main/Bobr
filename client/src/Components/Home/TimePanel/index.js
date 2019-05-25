import React, {Component} from 'react';

export default class TimePanel extends Component {

    state = {
        timeIndex: 0,
        timeSort: ['Сутки', 'Неделя', 'Месяц', 'Год'],
    };

    render() {
        const {timeIndex, timeSort} = this.state;
        return (
            <div className="home__time_panel">
                {timeSort.map((el, i) => {
                    return (
                        <span
                            key={i}
                            onClick={() => this.setState({timeIndex: i})}
                            className={timeIndex === i ? 'active_time_btn' : ""}
                        >{el}</span>
                    )
                })}
            </div>
        );
    }
}
import React, {Component} from 'react';
import './style.css';

/** Components **/
import NewsList from "./NewsList";
import SelectFlow from "./SelectFlow";

export default class LeftColumn extends Component {

    constructor(props){
        super(props);
        this.state = {
            tabIndex: 0,
            timeIndex: 0,
            timeSort: ['Сутки','Неделя','Месяц','Год'],
        };
    }

    changeTab(index){
        this.setState({tabIndex: index});
    }

    changeTimeLine(index){
        this.setState({timeIndex: index});
    }

    render(){
        const {tabIndex, timeSort, timeIndex} = this.state;
        return(
            <section className="main_left">
                <SelectFlow/>
                <div className="tab_panel">
                    <span
                        onClick={() => this.changeTab(0)}
                        className={tabIndex === 0 && 'tab_panel_active'}>
                        Лучшие
                    </span>
                    <span
                        onClick={() => this.changeTab(1)}
                        className={tabIndex === 1 && 'tab_panel_active'}>
                        Все подряд
                    </span>
                </div>
                <div className="time_sort">
                    {timeSort.map((el, i) => {
                        return (
                            <span
                                key={i}
                                onClick={() => this.changeTimeLine(i)}
                                className={timeIndex === i && 'active_time_btn'}
                            >
                                {el}
                            </span>
                        )
                    })}
                </div>
                {tabIndex === 0 && <NewsList />}
                {tabIndex === 1}
            </section>
        )
    }
}
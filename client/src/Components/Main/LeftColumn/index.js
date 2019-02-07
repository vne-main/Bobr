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
            tabArray: ['Лучшее', 'Все подряд'],
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
        const {tabIndex, timeSort, timeIndex, tabArray} = this.state;
        return(
            <section className="main_left">
                <SelectFlow/>
                <div className="tab_panel">
                    {tabArray.map((el, i) => {
                        return(
                            <span
                                key={i}
                                onClick={() => this.changeTab(i)}
                                className={tabIndex === i ? "tab_panel_active" : ""}>
                                {el}
                            </span>
                        )
                    })}
                </div>
                <div className="time_sort">
                    {timeSort.map((el, i) => {
                        return (
                            <span
                                key={i}
                                onClick={() => this.changeTimeLine(i)}
                                className={timeIndex === i ? 'active_time_btn' : ""}
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
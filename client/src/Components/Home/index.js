import React, {Component} from 'react';
import './style.css';

/** Components **/
import PostList from "./PostList";
import SelectStream from "./SelectStream";

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            tabArray: ['Лучшее', 'Все подряд'],
            timeIndex: 0,
            timeSort: ['Сутки', 'Неделя', 'Месяц', 'Год'],
        };
    }

    changeTab(index) {
        this.setState({tabIndex: index});
    }

    changeTimeLine(index) {
        this.setState({timeIndex: index});
    }

    componentWillMount() {
        this.props.changeCurrentPage('home');
    }

    render() {
        const {tabIndex, timeSort, timeIndex, tabArray} = this.state;
        return (
            <section>
                <SelectStream/>
                <div className="tab_panel">
                    {tabArray.map((el, i) => {
                        return (
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
                {tabIndex === 0 && <PostList/>}
                {tabIndex === 1}
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};
export default connect("", mapDispatchToProps)(Home);

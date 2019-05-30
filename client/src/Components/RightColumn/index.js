import React, {Component} from 'react';
import './style.css';

/* Module */
import {connect} from 'react-redux';

/* Components */
import Sponsors from "./Sponsors";
import Streams from "./Streams";
import MyCalendar from "./Calendar";
import StatisticsBox from "./StatisticsBox";

class RightColumn extends Component {

    render() {
        const {currentPage} = this.props;
        return (
            <section className="main_right">
                <MyCalendar/>
                {currentPage !== "users" && <Sponsors/>}
                {currentPage !== "users" && <Streams/>}
                {currentPage === "users" && <StatisticsBox/>}
            </section>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        currentPage: state.main.currentPage,
    }
};

export default connect(mapStateToProps)(RightColumn);
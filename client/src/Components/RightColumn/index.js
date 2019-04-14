import React, {Component} from 'react';
import './style.css';

/* Module */
import {connect} from 'react-redux';

/* Components */
import Sponsors from "./Sponsors";
import Streams from "./Streams";
import Banner from "./Banner";
import MyCalendar from "./Calendar";
import Statistics from "./Statistics";

class RightColumn extends Component {

    render() {
        const {currentPage} = this.props;
        return (
            <section className="main_right">
                <MyCalendar/>
                {currentPage !== "users" && <Sponsors/>}
                {currentPage !== "users" && <Streams/>}
                {currentPage === "users" && <Statistics/>}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(RightColumn);
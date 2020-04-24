import React from 'react';
import './style.css';

/* Module */
import { connect } from 'react-redux';

/* Components */
import Sponsors from './Sponsors';
import Streams from './Streams';
import MyCalendar from './Calendar';
import StatisticsBox from './StatisticsBox';

const RightColumn = ({ currentPage }) => {
  return (
    <section className="main_right">
      <MyCalendar />
      {currentPage === 'users' && <StatisticsBox />}
      <Sponsors />
      {currentPage !== 'users' && <Streams />}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.main.currentPage
  };
};

export default connect(mapStateToProps)(RightColumn);

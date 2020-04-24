import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class MyCalendar extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div className="right_column_box">
        <h3>Календарь</h3>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

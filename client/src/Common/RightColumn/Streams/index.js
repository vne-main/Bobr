import React, { Component } from 'react';
import './style.css';

export default class Streams extends Component {
  state = {
    streams: ['Разработка', 'Работа', 'Разное', 'Маркетинг', 'Управление']
  };

  render() {
    const { streams } = this.state;
    return (
      <div className="right_column_box">
        <h3>Потоки</h3>
        <ol className="right_streams_list">
          {streams.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ol>
      </div>
    );
  }
}

import React, { useEffect } from 'react';
import './style.css';

/* Function */
import { changePage } from 'Requsets/function';

/* Components */
import Graph from './Graph';
import Doughnut from './Doughnut';
import Bar from './Bar';

const Statistics = () => {
  useEffect(() => {
    changePage('statistics');
  }, []);

  return (
    <section>
      <h3 className="title_h3 title_pages">Статистика</h3>
      <aside className="statistics_block">
        <h4 className="statistics_graph_h4">Просмотры</h4>
        <Graph />
      </aside>
      <aside className="statistics_block">
        <h4 className="statistics_graph_h4">Что-то ещё</h4>
        <Bar />
      </aside>
      <aside className="statistics_block">
        <h4 className="statistics_graph_h4">Просмотры</h4>
        <div className="statistics_doughnut">
          <div>
            <Doughnut />
          </div>
          <div>
            <Doughnut />
          </div>
          <div>
            <Doughnut />
          </div>
          <div>
            <Doughnut />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Statistics;

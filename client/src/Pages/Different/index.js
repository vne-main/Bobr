import React, { useEffect } from 'react';
import './style.css';

/* Const */
import { PAGES_URL, PAGES_TITLE } from 'Const/pages';

/* Module */
import { Link } from 'react-router-dom';

/* Function */
import { changePage } from 'Requsets/function';

const Different = () => {
  useEffect(() => {
    changePage(PAGES_URL.different);
  }, []);

  const differentPage = ['statistics', 'help', 'advertising', 'work', 'about', 'documentation'];

  return (
    <section>
      <h3 className="title_h3 title_pages">В разработке</h3>
      <div className="different_container">
        {differentPage.map(el => {
          return (
            <Link to={PAGES_URL[el]} className="different_box" key={el}>
              <div className="different_block">{PAGES_TITLE[el]}</div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Different;

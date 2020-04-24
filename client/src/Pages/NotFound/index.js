import React, { useEffect } from 'react';
import './style.css';

/* Const */
import { PAGES_URL } from 'Const/pages';

/* Function */
import { changePage } from 'Requsets/function';

/* IMG */
import NotFoundImg from 'Static/img/404.png';

const NotFound = () => {
  useEffect(() => {
    changePage(PAGES_URL.notFound);
  }, []);
  return (
    <section className="page_not_found">
      <img src={NotFoundImg} alt="NotFound" />
    </section>
  );
};

export default NotFound;

import React from 'react';

export const User = props => {
  const { el } = props;
  return (
    <aside className="row_table_user">
      <div className="t_user">
        <div className="t_user_icon">
          <img src={el.photo} alt="user_icon" />
        </div>
        <div className="t_user_info">
          <span className="t_user_name">{el.login}</span>
          <span className="t_user_status">{el.status}</span>
          <div className="t_user_last_post">
            <span>Какой-то новый пост</span>
            <i>Дата поста</i>
          </div>
        </div>
      </div>
      <span className="user_rating">{el.rating}</span>
    </aside>
  );
};

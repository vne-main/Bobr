import React, { Component } from 'react';
import './style.css';

/* Const */
import { PAGES_URL } from 'Const/pages';

/* Components */
import PostPanel from './postPanel';

/* Module */
import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

class PostItem extends Component {
  textNews() {
    const page = this.currentPage === PAGES_URL.post;
  }

  render() {
    const { currentPage } = this.props;
    const { author_img, author_name, title, tags, text, time, _id } = this.props.post;
    const timePost = new Date(time).toLocaleString();
    return (
      <section className="news_item">
        <div className="top_user">
          <img src={require('../../Image/user.jpg')} alt="user_icon" className="user_icon" />
          <p className="user_name">{author_name}</p>
          <p className="news_time">{timePost}</p>
        </div>
        <div className="content_title">
          {currentPage !== PAGES_URL.post ? (
            <Link to={`/post/${_id}`} className="title_news">
              {title}
            </Link>
          ) : (
            <h3 className="title_h3">{title}</h3>
          )}
        </div>
        {tags.length ? (
          <div className="heading_news">
            {tags.map((tag, i) => {
              return <p key={i}>{tag}</p>;
            })}
          </div>
        ) : null}
        <div className="text_news">{text}</div>
        {currentPage !== PAGES_URL.post && (
          <Link to={`/post/${_id}`} className="news_more">
            Читать далее →
          </Link>
        )}
        <PostPanel version="full" post={this.props.post} />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.main.currentPage
  };
};

export default connect(mapStateToProps)(PostItem);

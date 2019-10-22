import React, { Component } from 'react';

/* Module */
import { Link } from 'react-router-dom';
import Counter from '../Counter';

/* Img */
import arrowImg from 'Static/img/stats/arrow.png';
import favoriteImg from 'Static/img/stats/favorite.png';
import eyeImg from 'Static/img/stats/eye.png';
import commentsImg from 'Static/img/stats/comments.png';

class PostPanel extends Component {
  render() {
    const { version, post } = this.props;
    return (
      <div className={version === 'mobile' ? 'news_stats m_post_news_stats' : 'news_stats'}>
        <div className="news_vote">
          <img src={arrowImg} alt="arrowUp" />
          <Counter value={post.likes} />
          <img src={arrowImg} alt="arrowDown" className="stats_arrow_down" />
        </div>
        <div className="news_favorite">
          <img src={favoriteImg} alt="favorite" />
          <i>{post.favorites}</i>
        </div>
        <div className="news_views">
          <img src={eyeImg} alt="eye" />
          <i>{post.views.length}</i>
        </div>
        <Link to={`/post/${post._id}`} className="news_comments">
          <img src={commentsImg} alt="comments" />
          <i>{post.comments.length}</i>
        </Link>
      </div>
    );
  }
}

export default PostPanel;

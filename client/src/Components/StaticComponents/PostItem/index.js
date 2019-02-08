import React, {Component} from 'react';
import './style.css';

/** Img **/
import arrowImg from '../../../Static/img/stats/arrow.png';
import eyeImg from '../../../Static/img/stats/eye.png';
import favoriteImg from '../../../Static/img/stats/favorite.png';
import commentsImg from '../../../Static/img/stats/comments.png';

/** Module **/
import { Link } from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

class PostItem extends Component {
    render(){
        const {post, currentPage} = this.props;
        return(
            <section className="news_item">
                <div className="top_news">
                    <div className="user_icon">
                        <img src={post.author_img} alt="user_icon"/>
                    </div>
                    <p className="user_name">{post.author_name}</p>
                    <p className="news_time">{post.time}</p>
                </div>
                {currentPage !== "post" ?
                    <Link to={`/post/${post.id}`} className="title_news">
                        {post.title}
                    </Link> :
                    <h3 className="title_news title_news_open">{post.title}</h3>
                }
                <div className="heading_news">
                    {post.tags && post.tags.map((tag, i) => {
                        return (
                            <p key={i}>{tag}</p>
                        )
                    })}
                </div>
                <div className="text_news">
                    {post.text}
                </div>
                {currentPage !== "post" &&
                    <Link to={`/post/${post.id}`} className="news_more">
                        Читать дальше →
                    </Link>
                }
                <div className="news_stats">
                    <div className="news_vote">
                        <img src={arrowImg} alt="arrowUp"/>
                        <i>+{post.likes}</i>
                        <img src={arrowImg} alt="arrowDown" className="stats_arrow_down"/>
                    </div>
                    <div className="news_favorite">
                        <img src={favoriteImg} alt="favorite"/>
                        <i>{post.favorites}</i>
                    </div>
                    <div className="news_views">
                        <img src={eyeImg} alt="eye"/>
                        <i>{post.views}k</i>
                    </div>
                    <div className="news_comments">
                        <img src={commentsImg} alt="comments"/>
                        <i>{post.comment}</i>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
    }
};

export default connect(mapStateToProps)(PostItem);
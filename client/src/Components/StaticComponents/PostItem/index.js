import React, {Component} from 'react';
import './style.css';

/* Components */
import PostPanel from './postPanel';

/* Module */
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

class PostItem extends Component {
    render() {
        const {post, currentPage} = this.props;
        const timePost = new Date(post.time).toLocaleString();
        return (
            <section className="news_item">
                <div className="top_user">
                    <img src={post.author_img} alt="user_icon" className="user_icon"/>
                    <p className="user_name">{post.author_name}</p>
                    <p className="news_time">{timePost}</p>
                </div>
                <div className="content_title">
                    {currentPage !== "post" ?
                        <Link to={`/post/${post._id}`} className="title_news">
                            {post.title}
                        </Link> :
                        <h3 className="title_h3">{post.title}</h3>
                    }
                </div>
                <div className="heading_news">
                    {post.tags.map((tag, i) => {
                        return (
                            <p key={i}>{tag}</p>
                        )
                    })}
                </div>
                <div className="text_news">
                    {post.text}
                </div>
                {currentPage !== "post" &&
                <Link to={`/post/${post._id}`} className="news_more">
                    Читать дальше →
                </Link>
                }
                <PostPanel version="full" post={post}/>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.main.currentPage,
    }
};

export default connect(mapStateToProps)(PostItem);
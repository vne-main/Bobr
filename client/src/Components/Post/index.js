import React, {Component} from 'react';
import arrowImg from "../../Static/img/stats/arrow.png";
import favoriteImg from "../../Static/img/stats/favorite.png";
import eyeImg from "../../Static/img/stats/eye.png";
import commentsImg from "../../Static/img/stats/comments.png";

import {bindActionCreators} from "redux";
import {getCurrentPost} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Post extends Component {

    getPost = async (id) => {
        const requestPost = await fetch(`/api/post/${id}`);
        const post = await requestPost.json();
        this.props.getCurrentPost(post);
    };

    componentWillMount() {
        const hashWindow = window.location.hash.split('/');
        const idPost = hashWindow[hashWindow.length - 1];
        this.getPost(idPost);
        window.scrollTo(0, 0);
    }

    render() {
        const {currentPost} = this.props;
        return (
            <section className="main_left">
                <div className="top_news">
                    <div className="user_icon">
                        <img src={currentPost.author_img} alt=""/>
                    </div>
                    <p className="user_name">{currentPost.author_name}</p>
                    <p className="news_time">{currentPost.time}</p>
                </div>
                <h1 className="title_news">
                    {currentPost.title}
                </h1>
                <div className="heading_news">
                    {currentPost.tags && currentPost.tags.map((tag, i) => {
                        return (
                            <p key={i}>{tag}</p>
                        )
                    })}
                </div>
                <div className="text_news">
                    {currentPost.text}
                </div>
                <div className="news_stats">
                    <div className="news_vote">
                        <img src={arrowImg} alt="arrowUp"/>
                        <i>+{currentPost.likes}</i>
                        <img src={arrowImg} alt="arrowDown" className="stats_arrow_down"/>
                    </div>
                    <div className="news_favorite">
                        <img src={favoriteImg} alt="favorite"/>
                        <i>{currentPost.favorites}</i>
                    </div>
                    <div className="news_views">
                        <img src={eyeImg} alt="eye"/>
                        <i>{currentPost.views}k</i>
                    </div>
                    <div className="news_comments">
                        <img src={commentsImg} alt="comments"/>
                        <i>{currentPost.comment}</i>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.currentPost
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentPost: bindActionCreators(getCurrentPost, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
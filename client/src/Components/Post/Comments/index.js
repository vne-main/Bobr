import React, {Component} from 'react';
import './style.css';

import axios from 'axios';

/* IMG */
import spImg2 from '../../../Static/img/sponsor/sponsor_2.jpg'
import arrowImg from "../../../Static/img/stats/arrow.png";

/* Components */
import Counter from "../../StaticComponents/Counter";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {changeCurrentPost} from "../../../Store/actions";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    addComment = async () => {
        const {text} = this.state;
        if (text.trim() === "") return;
        axios.post('/post/comment', {
            _id: this.props.postId,
            text: text,
            author_name: "User",
        }).then(res => {
            console.info(res);
            this.setState({text: ""});
            this.props.changeCurrentPost(res.data);
        }).catch(err => {
            console.error(err);
        });


        // if (requestComment.status === 200) {
        //     const requestPost = await fetch(`/post/${idPost}`);
        //     const currentPost = await requestPost.json();
        //     this.props.changeCurrentPost(currentPost);
        //     const requestGetPosts = await fetch('/post');
        //     const postList = await requestGetPosts.json();
        //     this.props.getPostList(postList);
        // }
    };

    render() {
        const {comments} = this.props;
        return (
            <div className="comment_box">
                {comments && comments.length !== 0 &&
                <h3 className="title_h3 h3_com">Комментарии <i>{comments.length}</i></h3>
                }
                {comments && comments.map((el, i) => {
                    return (
                        <aside className="comment" key={i}>
                            <div className="comment_title">
                                <div className="top_user">
                                    <div className="flex_comm_name">
                                        <img src={spImg2} alt="user_icon" className="user_icon"/>
                                        <p className="user_name">{el.author_name}</p>
                                    </div>
                                    <p className="news_time">{new Date(el.time).toLocaleString()}</p>
                                </div>
                                <div className="news_vote">
                                    <img src={arrowImg} alt="arrowUp"/>
                                    <Counter value={el.likes}/>
                                    <img src={arrowImg} alt="arrowDown" className="stats_arrow_down"/>
                                </div>
                            </div>
                            <p>{el.text}</p>
                        </aside>
                    )
                })}
                <h3 className="title_h3">Написать комментарий</h3>
                <div className="send_comment">
                    <textarea
                        onChange={(e) => this.setState({text: e.target.value})}
                        value={this.state.text}
                    />
                    <button
                        className="blue_button"
                        onClick={() => this.addComment()}
                    >Отправить
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.currentPost,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPost: bindActionCreators(changeCurrentPost, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

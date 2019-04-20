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
import {addNewComment} from "../../../Store/Actions/actionPost";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            status: "",
        }
    }

    addComment = async () => {
        const {text} = this.state;
        if (text.trim() === "") {
            this.setState({status: "Напишите комментарий"});
            return;
        }
        this.setState({status: "Пожалуйста, подождите..."});
        axios.post('/post/comment', {
            _id: this.props.postId,
            text: text,
            author_name: "User",
        }).then(res => {
            this.setState({text: ""});
            this.props.addNewComment(res.data);
            this.setState({status: "Ваш комментарий опубликован"});
        }).catch(err => {
            console.info("Error require in: /post/comment");
            console.error(err);
            this.setState({status: "Ошибка сервера"});
        });
    };

    render() {
        const {comments} = this.props;
        const {status, text} = this.state;
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
                        value={text}
                        placeholder="Ваш комментарий"
                    />
                    <div className="send_comment_panel">
                        <button
                            className="blue_button"
                            onClick={() => this.addComment()}
                        >Отправить
                        </button>
                        <p className="status_p">{status}</p>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.post.currentPost,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewComment: bindActionCreators(addNewComment, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

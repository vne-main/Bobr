import React, {Component} from 'react';
import './style.css';
import spImg2 from '../../../Static/img/sponsor/sponsor_2.jpg'
import arrowImg from "../../../Static/img/stats/arrow.png";


class Comments extends Component {
    render() {
        const {comments} = this.props;
        return (
            <div className="comment_box">
                {comments.length !== 0 &&
                    <h3 className="title_h3 h3_com">Комментарии <i>{comments.length}</i></h3>
                }
                {comments.map((el, i) => {
                    return (
                        <aside className="comment" key={i}>
                            <div className="comment_title">
                                <div className="top_user">
                                    <div className="flex_comm_name">
                                        <img src={spImg2} alt="user_icon" className="user_icon"/>
                                        <p className="user_name">{el.author_name}</p>
                                    </div>
                                    <p className="news_time">{el.time}</p>
                                </div>
                                <div className="news_vote">
                                    <img src={arrowImg} alt="arrowUp"/>
                                    <i>+{el.like}</i>
                                    <img src={arrowImg} alt="arrowDown" className="stats_arrow_down"/>
                                </div>
                            </div>
                            <p>{el.text}</p>
                        </aside>
                    )
                })}
                <h3 className="title_h3">Написать комментарий</h3>
                <div className="send_comment">
                    <textarea/>
                    <button className="blue_button">Отправить</button>
                </div>
            </div>
        )
    }
}

export default Comments;

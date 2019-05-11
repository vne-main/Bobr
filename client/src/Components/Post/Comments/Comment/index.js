import React from "react";

/* IMG */
import spImg2 from "../../../../Static/img/sponsor/sponsor_2.jpg";
import arrowImg from "../../../../Static/img/stats/arrow.png";

/* Components */
import Counter from "../../../StaticComponents/Counter";

export const Comment = (props) => {
    const {el, i} = props;
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
};
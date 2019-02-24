import React, {Component} from 'react';
import './style.css';
import Skeleton from 'react-loading-skeleton';

const Comment = () => {
    return (
        <aside className="comment">
            <div className="comment_title">
                <div className="top_user skeleton_container">
                    <Skeleton width={24} height={24} className="user_icon"/>
                    <div className="post_skeleton_author">
                        <Skeleton width={45} height={15} />
                    </div>
                    <Skeleton width={115} height={15}/>
                </div>
                <div className="news_vote">
                    <Skeleton width={50} height={20}/>
                </div>
            </div>
            <Skeleton width={450} height={15} count={3}/>
        </aside>
    )
};

export default class CommentsSkeleton extends Component {
    render() {
        return (
            <div className="comment_box">
                <Skeleton width={260} height={40} />
                <div className="comments_skeleton_line">
                    <Skeleton width={'100%'} height={2} />
                </div>
                <Comment/>
                <Comment/>
                <h3 className="title_h3">
                    <Skeleton width={300} height={40} />
                </h3>
                <div className="send_comment">
                    <Skeleton width={'100%'} maxWidth={'400'} height={120} />
                    <div className="comments_skeleton_btn">
                        <Skeleton width={140} height={30} />
                    </div>
                </div>
            </div>
        )
    }
}
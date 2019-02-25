import React, {Component} from 'react';
import './style.css';

const Comment = () => {
    return (
        <aside className="sk_comments_comment">
            <div className="sk_comments_top">
                <div className="sk_comments_user">
                    <span className="skeleton sk_post_user_icon"/>
                    <span className="skeleton sk_post_author"/>
                    <span className="skeleton sk_post_time"/>
                </div>
                <span className="skeleton sk_comments_vote"/>
            </div>
            <div className="sk_post_text">
                <span className="skeleton"/>
                <span className="skeleton"/>
                <span className="skeleton"/>
            </div>
        </aside>
    )
};

export default class CommentsSkeleton extends Component {
    render() {
        return (
            <div className="comment_box">
                <span className="skeleton sk_comments_title"/>
                <span className="skeleton sk_comments_line"/>
                <Comment/>
                <Comment/>
                <span className="skeleton sk_comments_title_h3"/>
                <span className="skeleton sk_comments_textarea"/>
                <span className="skeleton sk_comments_btn"/>
            </div>
        )
    }
}
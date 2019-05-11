import React, {Component} from 'react';
import './style.css';

export default class CommentsSkeleton extends Component {
    render() {
        return (
            <aside className="row_table_user">
                <div className="t_user">
                    <div className="skeleton sk_users_img"/>
                    <div className="t_user_info">
                        <div className="skeleton sk_users_text"/>
                        <div className="skeleton sk_users_text"/>
                        <div className="skeleton sk_users_text"/>
                    </div>
                </div>
                <div className="skeleton sk_users_rating"/>
            </aside>
        )
    }
}
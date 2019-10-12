import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostPanel from './postPanel';

class MobilePost extends Component {
	render() {
		const { post } = this.props;
		const timePost = new Date(post.time).toLocaleString();
		return (
			<section className="news_item m_post_news_item">
				<div className="top_user">
					<img src={post.author_img} alt="user_icon" className="user_icon" />
					<p className="user_name">{post.author_name}</p>
					<p className="news_time">{timePost}</p>
				</div>
				<Link to={`/post/${post._id}`} className="title_news m_post_title">
					{post.title}
				</Link>
				<PostPanel version="mobile" post={post} />
			</section>
		);
	}
}

export default MobilePost;

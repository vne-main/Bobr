import React, {Component} from 'react';
import PostItem from "../StaticComponents/PostItem";
import Comments from './Comments';

import {bindActionCreators} from "redux";
import {
    changeCurrentPost,
    changeCurrentPage,
} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Post extends Component {

    state = {
        success: true,
    };

    getPost = async (id) => {
        const requestPost = await fetch(`/api/post/${id}`);
        if (requestPost.status !== 500){
            const post = await requestPost.json();
            this.props.changeCurrentPost(post);
            this.setState({success: true});
        } else {
            this.setState({success: false});
            console.log(requestPost);
        }
    };

    componentWillMount() {
        this.props.changeCurrentPage("post");
        const hashWindow = window.location.hash.split('/');
        const idPost = hashWindow[hashWindow.length - 1];
        idPost !== "post" ? this.getPost(idPost) : this.getPost(0);
        window.scrollTo(0, 0);
    }

    render() {
        const {success} = this.state;
        const {currentPost} = this.props;
        return (
            <section>
                {!success ?
                    <h3 className="title_h3">Пост не найден</h3>
                    :
                    <div>
                        <PostItem post={currentPost}/>
                        <Comments comments={currentPost.comments}/>
                    </div>
                }
            </section>
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
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

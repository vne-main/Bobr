import React, {Component} from 'react';
import PostItem from "../StaticComponents/PostItem";

import {bindActionCreators} from "redux";
import {
    changeCurrentPost,
    changeCurrentPage,
} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Post extends Component {

    getPost = async (id) => {
        const requestPost = await fetch(`/api/post/${id}`);
        const post = await requestPost.json();
        this.props.changeCurrentPost(post);
    };

    componentWillMount() {
        this.props.changeCurrentPage("post");
        const hashWindow = window.location.hash.split('/');
        const idPost = hashWindow[hashWindow.length - 1];
        idPost !== "post" ? this.getPost(idPost) : this.getPost(0);
        window.scrollTo(0, 0);
    }

    render() {
        const {currentPost} = this.props;
        return (
            <section>
                <PostItem post={currentPost}/>
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

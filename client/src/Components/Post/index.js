import React, {Component} from 'react';

/* Components */
import PostSkeleton from "../StaticComponents/PostItem/Skeleton/index";
import PostItem from "../StaticComponents/PostItem";
import CommentsSkeleton from "./Comments/Skeleton";
import Comments from './Comments';

/* Module */
import {bindActionCreators} from "redux";
import {changeCurrentPost, changeCurrentPage,} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

class Post extends Component {

    state = {
        success: true,
        skeleton: true,
    };

    getPost = async (id) => {
        console.info(`Post id = ${id}`);
        const requestPost = await fetch(`/post/${id}`);
        console.log(await requestPost);
        // const currentPost = await requestPost.json();

        // this.props.changeCurrentPost(currentPost);
        await this.setState({skeleton: false});
    };

    componentWillMount() {
        this.props.changeCurrentPage("post");
        const hashWindow = window.location.hash.split('/');
        const idPost = hashWindow[hashWindow.length - 1];

        if(idPost) {
            this.getPost(idPost);
        }


        // idPost !== "post" ? this.getPost(idPost) : this.getPost("23");
        window.scrollTo(0, 0);
    }

    render() {
        const {success, skeleton} = this.state;
        const {currentPost} = this.props;
        return (
            <section>
                {!success ?
                    <h3 className="title_h3">Пост не найден</h3>
                    :
                    <div>
                        {skeleton ?
                            <div>
                                <PostSkeleton/>
                                <CommentsSkeleton/>
                            </div> :
                            <div>
                                <PostItem post={currentPost}/>
                                <Comments comments={currentPost.comments}/>
                            </div>
                        }
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

import React, {Component} from 'react';
import './style.css';
import PostItem from '../PostItem';

/** Redux **/
import connect from "react-redux/es/connect/connect";

class PostList extends Component {
    render() {
        const {postList} = this.props;
        return (
            <section className="news_list">
                {postList.map((el, i) => {
                    return (
                        <PostItem post={el} key={i}/>
                    )
                })}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.postList
    }
};

export default connect(mapStateToProps)(PostList);
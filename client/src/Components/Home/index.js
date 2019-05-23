import React, {Component} from 'react';
import './style.css';

/* Components */
import SelectStream from "./SelectStream";
import PostItem from "../StaticComponents/PostItem";
import PostItemMobile from "../StaticComponents/PostItem/mobile";
import PostSkeleton from "../StaticComponents/PostItem/Skeleton/index";

/* Redux */
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/Actions/actionMain";
import {getPostList} from "../../Store/Actions/actionPost";
import {connect} from "react-redux";


class Home extends Component {

    state = {
        sortIndex: 0,
        sortArray: ['Важное', 'Разное', 'Все подряд'],
        timeIndex: 0,
        timeSort: ['Сутки', 'Неделя', 'Месяц', 'Год'],
        initialPageSize: 5,
        currentPage: 1,
    };

    changePages = (openPage) => {
        if (openPage === this.state.currentPage) return;
        this.setState({currentPage: openPage});
        window.scrollTo(0, 0);
    };

    componentDidMount() {
        const {postList, changeCurrentPage, getPostList} = this.props;
        changeCurrentPage('home');
        if (!postList.length) getPostList();
    }

    render() {
        const {postList, loading} = this.props;
        const {sortIndex, timeSort, timeIndex, sortArray, currentPage, initialPageSize} = this.state;
        const paginationArr = postList.slice(
            (currentPage - 1) * initialPageSize,
            (currentPage - 1) * initialPageSize + initialPageSize
        );
        let btnArray = [];
        for (let i = 0; i < (postList.length / initialPageSize); i++) btnArray.push(i + 1);
        return (
            <section>
                <SelectStream/>
                <div className="tab_panel">
                    {sortArray.map((el, i) => {
                        return (
                            <span
                                key={i}
                                onClick={() => this.setState({sortIndex: i})}
                                className={sortIndex === i ? "tab_panel_active" : ""}>
                                {el}
                            </span>
                        )
                    })}
                </div>
                <div className="time_sort">
                    {timeSort.map((el, i) => {
                        return (
                            <span
                                key={i}
                                onClick={() => this.setState({timeIndex: i})}
                                className={timeIndex === i ? 'active_time_btn' : ""}
                            >
                                {el}
                            </span>
                        )
                    })}
                </div>
                {loading &&
                <section>
                    <PostSkeleton/>
                    <PostSkeleton/>
                    <PostSkeleton/>
                    <PostSkeleton/>
                    <PostSkeleton/>
                    <PostSkeleton/>
                    <PostSkeleton/>
                </section>
                }
                {!loading && sortIndex === 0 &&
                <section>
                    {paginationArr.map((el, i) => {
                        return (
                            <div key={i}>
                                <section className="h_full_post">
                                    <PostItem post={el} key={i}/>
                                </section>
                                <section className="h_mobile_post">
                                    <PostItemMobile post={el} key={i}/>
                                </section>
                            </div>
                        )
                    })}
                    <ol className="pagination_panel">
                        {btnArray.map((el, i) => {
                            return (
                                <li
                                    key={i}
                                    onClick={() => this.changePages(el)}
                                    className={el === currentPage ? "pagination_active" : ""}
                                >
                                    {el}
                                </li>
                            )
                        })}
                    </ol>
                </section>
                }
                {sortIndex === 1 && <PostSkeleton/>}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.post.postList,
        loading: state.post.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
        getPostList: bindActionCreators(getPostList, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

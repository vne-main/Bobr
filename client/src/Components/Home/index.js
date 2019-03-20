import React, {Component} from 'react';
import './style.css';

/** Components **/
import SelectStream from "./SelectStream";

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";
import PostItem from "../StaticComponents/PostItem";
import PostItemMobile from "../StaticComponents/PostItem/mobile";
import PostSkeleton from "../StaticComponents/PostItem/Skeleton/index";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortIndex: 0,
            sortArray: ['Лучшее', 'Разное', 'Все подряд'],
            timeIndex: 0,
            timeSort: ['Сутки', 'Неделя', 'Месяц', 'Год'],
            initialPageSize: 3,
            currentPage: 1,
        };
    }

    changePages = (openPage) => {
        if (openPage === this.state.currentPage) return;
        this.setState({currentPage: openPage});
        window.scrollTo(0, 0);
    };

    changeTab(index) {
        this.setState({sortIndex: index});
    }

    changeTimeLine(index) {
        this.setState({timeIndex: index});
    }

    componentDidMount() {
        this.props.changeCurrentPage('home');
    }

    render() {
        const {postList} = this.props;
        const {sortIndex, timeSort, timeIndex, sortArray, currentPage, initialPageSize} = this.state;
        const paginationArr = postList.slice(
            (currentPage - 1) * initialPageSize,
            (currentPage - 1) * initialPageSize + initialPageSize
        );
        let btnArray = [];
        for(let i = 0; i < (postList.length / initialPageSize); i++){
            btnArray.push(i+1);
        }
        return (
            <section>
                <SelectStream/>
                <div className="tab_panel">
                    {sortArray.map((el, i) => {
                        return (
                            <span
                                key={i}
                                onClick={() => this.changeTab(i)}
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
                                onClick={() => this.changeTimeLine(i)}
                                className={timeIndex === i ? 'active_time_btn' : ""}
                            >
                                {el}
                            </span>
                        )
                    })}
                </div>
                {sortIndex === 0 && postList.length === 0 &&
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
                {sortIndex === 0 &&
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
                {sortIndex === 1 &&
                <PostSkeleton/>
                }
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: state.postList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

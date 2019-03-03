import React, {Component} from 'react';
import './style.css';

/** Components **/
import SelectStream from "./SelectStream";

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";
import PostItem from "../StaticComponents/PostItem";
import PostSkeleton from "../StaticComponents/PostItem/Skeleton/index";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sortIndex: 0,
            sortArray: ['Лучшее', 'Все подряд'],
            timeIndex: 0,
            timeSort: ['Сутки', 'Неделя', 'Месяц', 'Год'],
        };
    }

    changeTab(index) {
        this.setState({sortIndex: index});
    }

    changeTimeLine(index) {
        this.setState({timeIndex: index});
    }

    componentWillMount() {
        this.props.changeCurrentPage('home');
    }

    render() {
        const {postList} = this.props;
        const {sortIndex, timeSort, timeIndex, sortArray} = this.state;
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
                <section className="news_list">
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
                <section className="news_list">
                    {postList.map((el, i) => {
                        return (
                            <PostItem post={el} key={i}/>
                        )
                    })}
                </section>
                }
                {sortIndex === 1 && <PostSkeleton/>}
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

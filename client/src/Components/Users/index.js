import React, {Component} from 'react';
import './style.css';

import SearchIcon from '@material-ui/icons/Search';
import spImg1 from "../../Static/img/sponsor/sponsor_1.jpg";


/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";

const User = () => {
    return (
        <aside className="row_table_user">
            <div className="t_user">
                <div className="t_user_icon">
                    <img src={spImg1} alt="user_icon"/>
                </div>
                <div className="t_user_info">
                    <div className="t_user_name">
                        <span>Имя пользователя</span>
                        <i>@login</i>
                    </div>
                    <span className="t_user_status">
                                    User Status
                                </span>
                    <div className="t_user_last_post">
                        <span>Какой-то новый пост</span>
                        <i>Дата поста</i>
                    </div>
                </div>
            </div>

            <div className="status_user">
                <span className="user_carma">2202</span>
                <span className="user_rating">12132</span>
            </div>
        </aside>
    )
};

class Users extends Component {

    componentWillMount() {
        this.props.changeCurrentPage("users");
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section>
                <h3 className="title_h3 title_pages">Пользователи</h3>
                <div className="search_user">
                    <input type="text" placeholder="Найти пользователя"/>
                    <SearchIcon/>
                </div>

                <div className="table_user">
                    <aside className="title_table_user">
                        <div>
                            <span>Имя</span>
                        </div>
                        <div className="status_user">
                            <span>Карма</span>
                            <span>Рейтинг</span>
                        </div>
                    </aside>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                </div>


            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Users);
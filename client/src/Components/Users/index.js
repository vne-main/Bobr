import React, {Component} from 'react';
import './style.css';

/* Module */
import axios from 'axios';

/* IMG */
import SearchIcon from '@material-ui/icons/Search';

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/actions";
import {connect} from "react-redux";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        }
    }

    getUserList(){
        axios.get('/user')
            .then(res => {
                this.setState({userList: res.data});
            })
    }

    componentDidMount() {
        this.props.changeCurrentPage("users");
        this.getUserList();
    }

    render() {
        const {userList} = this.state;
        return (
            <section>
                <h3 className="title_h3 title_pages">Пользователи</h3>
                <div className="search_panel">
                    <input type="text" placeholder="Найти пользователя"/>
                    <SearchIcon/>
                </div>

                <div className="table_user">
                    <aside className="title_table_user">
                        <div>
                            <span>Имя</span>
                        </div>
                            <span>Рейтинг</span>
                    </aside>
                    {userList.map((el, i) => {
                        return <User el={el} key={i}/>
                    })}
                </div>
            </section>
        )
    }
}

class User extends Component {
    render(){
        const {el} = this.props;
        return (
            <aside className="row_table_user">
                <div className="t_user">
                    <div className="t_user_icon">
                        <img src={el.photo} alt="user_icon"/>
                    </div>
                    <div className="t_user_info">
                        <span className="t_user_name">{el.login}</span>
                        <span className="t_user_status">{el.status}</span>
                        <div className="t_user_last_post">
                            <span>Какой-то новый пост</span>
                            <i>Дата поста</i>
                        </div>
                    </div>
                </div>
                <span className="user_rating">{el.rating}</span>
            </aside>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect("", mapDispatchToProps)(Users);
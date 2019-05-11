import React, {Component} from 'react';
import './style.css';

/* Requests */
import {getUsersList} from '../../Requsets/apiUser';

/* Components */
import {User} from './User';

/* IMG */
import SearchIcon from '@material-ui/icons/Search';

/** Redux **/
import {bindActionCreators} from "redux";
import {changeCurrentPage} from "../../Store/Actions/actionMain";
import {connect} from "react-redux";

class Users extends Component {

    componentDidMount() {
        this.props.changeCurrentPage("users");
        getUsersList();
    }

    render() {
        const {usersList} = this.props;
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
                    {usersList.map((el, i) => <User el={el} key={i}/>)}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: state.user.usersList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
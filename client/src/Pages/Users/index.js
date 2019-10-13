import React, { Component } from 'react';
import './style.css';

/* Requests */
import { getUsersList } from '../../Requsets/apiUser';

/* Components */
import { User } from './User';
import Skeleton from './Skeleton';

/* IMG */
import SearchIcon from '@material-ui/icons/Search';

/* Redux */
import { bindActionCreators } from 'redux';
import { changePage } from '../../Requsets/function';
import { searchUser } from '../../Store/Actions/actionUser';
import { connect } from 'react-redux';

class Users extends Component {
	componentDidMount() {
		const { usersList, searchUser } = this.props;
		changePage('users');
		searchUser('');
		if (usersList.length === 0) getUsersList();
	}

	render() {
		const { usersList, searchUserList, searchUser } = this.props;
		return (
			<section>
				<h3 className="title_h3 title_pages">Пользователи</h3>
				<div className="search_panel">
					<input
						type="text"
						placeholder="Найти пользователя"
						onChange={e => searchUser(e.target.value)}
					/>
					<SearchIcon />
				</div>
				<div className="table_user">
					<aside className="title_table_user">
						<div>
							<span>Имя</span>
						</div>
						<span>Рейтинг</span>
					</aside>
					{usersList.length === 0 ? (
						<>
							<Skeleton />
							<Skeleton />
							<Skeleton />
							<Skeleton />
							<Skeleton />
						</>
					) : (
						<>
							{searchUserList.map((el, i) => (
								<User el={el} key={i} />
							))}
						</>
					)}
				</div>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		usersList: state.user.usersList,
		searchUserList: state.user.searchUserList,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		searchUser: bindActionCreators(searchUser, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);

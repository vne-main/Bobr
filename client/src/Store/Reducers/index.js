import { combineReducers } from 'redux';
import main from './reducerMain';
import user from './reducerUser';
import post from './reducerPost';

export default combineReducers({
	main,
	user,
	post,
});

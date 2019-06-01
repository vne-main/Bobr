import {combineReducers} from 'redux';
import main from './reducerMain';
import user from './reducerUser';
import post from './reducerPost';
import modal from './reducerModal';

export default combineReducers({
    main,
    user,
    post,
    modal,
});
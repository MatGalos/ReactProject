import { combineReducers } from 'redux';
import users, { IUsersReducer } from './usersReducers';
import photos, { IPhotosReducer } from './photosReducers';
import comments, { ICommentsReducer } from './commentReducers';
import posts, { IPostsReducer } from './postReducers';

export default combineReducers({
    users,
    photos,
    comments,
    posts
})

export interface IState {
    users: IUsersReducer,
    photos: IPhotosReducer,
    comments: ICommentsReducer,
    posts: IPostsReducer
} 
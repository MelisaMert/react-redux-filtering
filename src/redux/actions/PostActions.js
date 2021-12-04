import * as actions from '../constants/PostConstants';
import axios from 'axios';

export const fetchPosts = () => async(dispatch) => {
    dispatch({type: actions.FETCH_POST_REQUEST});
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({type: actions.FETCH_POST_SUCCESS, payload: data})
    } catch(error) {
        dispatch({type:actions.FETCH_POST_FAILED, payload: error.message})
        console.log(error.message);
    }
};

export const sortPostsAsc = () => async (dispatch) => {
    // const {PostReducers} = getState();
    // dispatch({type: actions.SORT_POSTS_ASC, payload: PostReducers.posts });

    try {
        dispatch({type: actions.SORT_POSTS_ASC});
    } catch(error) {
        console.log(error);
    }
}

export const sortPostsDesc = () => async (dispatch) => {
    try {
        dispatch({ type: actions.SORT_POSTS_DESC});
    } catch(error) {
        console.log(error);
    }
   
}

export const searchPosts = (query) => (dispatch) => {
    try {
        dispatch({type: actions.SEARCH_POSTS,  payload: query});
    } catch(error) {
      console.log(error)
    }
}
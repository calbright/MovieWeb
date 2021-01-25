import { combineReducers } from 'redux';

const fetchMovieReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_MOVIE':
            return action.payload;
        default:
            return state;
    }
}
const fetchAllMovieReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH__ALL_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    movie: fetchMovieReducer,
    allmovies: fetchAllMovieReducer
})
import { combineReducers } from 'redux';

const fetchMovieReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    movie: fetchMovieReducer
})
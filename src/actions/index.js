import axios from 'axios';

export const fetchMovie = (title) =>
    async (dispatch) => {
        const response = await axios.get(`http://localhost:5005/title/${title}`);
        dispatch({
            type: 'FETCH_MOVIE',
            payload: response.data
        })
    }

export const fetchAllMovies = () =>
async (dispatch) => {
    const response = await axios.get(`http://localhost:5005/titles`);
    console.log(response.data);
    dispatch({
        type: 'FETCH_ALL_MOVIES',
        payload: response.data
    })
}
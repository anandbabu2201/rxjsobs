import { FETCHING_DATASUCESS, FETCHING_DATA, FETCHING_FAILURE } from "./types";
import  axios from 'axios';

export const getData =_=> async dispatch =>{
    dispatch({type:FETCHING_DATA});
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: FETCHING_DATASUCESS,
            payload:res.data
        })

    } catch(err){
        dispatch({type:FETCHING_FAILURE})
    }
}
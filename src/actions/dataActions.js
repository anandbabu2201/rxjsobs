import { FETCHING_DATASUCESS } from "./types";
import  axios from 'axios';

export const getData =_=> async dispatch =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: FETCHING_DATASUCESS,
        payload:res.data
    })
}
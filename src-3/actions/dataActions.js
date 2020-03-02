import { FETCHING_DATASUCESS, FETCHING_DATA, FETCHING_FAILURE } from "./types";

export const getUser= ()=>({type:FETCHING_DATA});

export const getUserSuccess = (users) =>({
    type:FETCHING_DATASUCESS,
    payload:users
})

export const getUserError = () =>({
  type:FETCHING_FAILURE,
})


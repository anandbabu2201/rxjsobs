import {FETCHING_DATA } from "../actions/types";
import {getUserSuccess,getUserError} from '../actions/dataActions'
import { map, flatMap, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { ofType } from "redux-observable";

export const getDataEpic =action$ =>
action$.pipe(
    ofType(FETCHING_DATA),
    flatMap(_=>ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
      map(res=>getUserSuccess(res)),
      catchError(error => of(
        getUserError()))
    ))
    );
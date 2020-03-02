import { FETCHING_DATA,FETCHING_DATASUCESS,FETCHING_FAILURE } from '../actions/types';

const initialState ={
    data:[]
}

export default function (state = initialState,action){
        switch (action.type) {
            case FETCHING_DATA :
              return { ...state , loading :true}
            case FETCHING_DATASUCESS : 
               return { ...state ,loading:false, data:action.payload}
            case FETCHING_FAILURE : 
               return { ...state, loading:false,error:'error occured'}
            default :
                return state;
        }
    }
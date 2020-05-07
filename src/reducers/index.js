import {combineReducers} from 'redux';

const countReducer = (value =0 , action)=>{
    if(action.type === 'INCREMENT'){
        return value + 1;
    }
    if(action.type === 'DECREMENT'){
        return value -1 ;
    }
    return value;
}


export default combineReducers({
    count: countReducer
});
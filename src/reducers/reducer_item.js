import { FETCH_DATA } from '../actions/index'

export default function(state = {}, action){
    switch(action.type) {
        case FETCH_DATA:
            return Array.from(action.payload.data)[0];
    }
    return state;
}
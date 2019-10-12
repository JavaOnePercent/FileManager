import {
    AGG_GET_FILES
} from '../actions/types';

const initialState = {
}

export function files(state = initialState, action) {
    switch(action.type)
    {
        case AGG_GET_FILES:
            return action.payload;
        default:
            return state;
    }
}

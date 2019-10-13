import {
    GET_FIRST_FILES,
    GET_NEXT_FILES,
    SET_LOADING_STATUS
} from '../actions/types';

const initialState = {
    items: [],
    currentPage: 0,
    lastPage: 0,
    isLoading: false
}

export function files(state = initialState, action) {
    switch(action.type)
    {
        case GET_FIRST_FILES:
            return {
                items: action.payload.items,
                currentPage: action.payload.currentPage,
                lastPage: action.payload.lastPage,
                isLoading: false
            }
        case GET_NEXT_FILES:
            return {
                ...state,
                items: [...state.items.concat(action.payload.items)],
                currentPage: action.payload.currentPage,
                isLoading: false
            }
        case SET_LOADING_STATUS:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

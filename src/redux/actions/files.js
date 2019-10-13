import axios from 'axios';
import {
    GET_FIRST_FILES,
    GET_NEXT_FILES,
    SET_LOADING_STATUS
} from './types';

const instance = axios.create({
    headers: { 'Authorization': process.env.TOKEN }
});

export const getFiles = (path, currentPage) => dispatch => {

    dispatch({ type: SET_LOADING_STATUS, payload: true });

    const limit = 60;

    instance.get('https://cloud-api.yandex.net/v1/disk/resources', {
        params: {
            path: path,
            offset: currentPage * limit,
            limit: limit
        }
    }).then(function (response) {
        let files = response.data._embedded.items;
        let pageNumber = currentPage;
        if(currentPage === 0) {
            let total = response.data._embedded.total;
            let lastPage = getLastPage(limit, total);
            let filesList = {items: files, currentPage: pageNumber, lastPage: lastPage};
            dispatch({ type: GET_FIRST_FILES, payload: filesList });
        }
        else
        {
            let filesList = {items: files, currentPage: pageNumber};
            dispatch({ type: GET_NEXT_FILES, payload: filesList });
        }
    }).catch(function (error) {
        console.log(error)
    });
};

const getLastPage = (limit, total) => {
    return Math.ceil(total / limit);
};
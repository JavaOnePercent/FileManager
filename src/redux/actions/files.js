import axios from 'axios';
import {
    AGG_GET_FILES
} from './types';

const instance = axios.create({
    headers: {'Authorization': ''} // TODO <- need to add token
});

export const getFiles = (path) => dispatch => {
    instance.get('https://cloud-api.yandex.net/v1/disk/resources', {
        params: {
            path: path
        }
    }).then(function (response) {

        let files = response.data._embedded;
        console.log(files);
        dispatch({type: AGG_GET_FILES, payload: files});
    })
        .catch(function (error) {
            console.log(error)
        });
};
import axios from 'axios';

export const FETCH_DATA = 'fetch_data';

export function fetchData() {
    const url = '../../Webdev_data2.json';
    const request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_DATA,
        payload: request
    }
}
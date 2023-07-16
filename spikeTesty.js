import http from 'k6/http';
import {check, sleep} from 'k6';
import {URL} from "./env.js";

export const options = {
    stages: [
        { duration: '10m', target: 40000 },
        { duration: '2m', target: 0 },
    ],
};

export default () => {
    const response = http.get(URL);
    sleep(1);
    check(response,{
        'Response should be 200': (r) => r.status === 200,
        'Size should be 1514': (r) => r.body.length === 1514

    })

};

import http from 'k6/http';
import { sleep, check } from 'k6';
import {URL} from "./env.js";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
export const options = {
    vus: 5,
    duration: '1m',
};
export default function () {
    const response = http.get(URL);
    sleep(1);
    check(response,{
        'Response should be 200': (r) => r.status === 200,
        'Size should be 1514': (r) => r.body.length === 1514

    })
}

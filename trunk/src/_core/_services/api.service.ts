import { Injectable } from '@angular/core';
import { Configuration } from '../../_config/config.enum';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    postData(url, data) {
        const header = new Headers({
            'Content-Type': 'application/json'
        });

        const options = new RequestOptions({
            headers: header
        });
        const body = JSON.stringify(data);

        return this.http
            .post(url, body, options)
            .map((res: Response) => res.json());
    }

    getData(url, data) {
      const body = JSON.stringify(data);

        return this.http.get(url, body).map((res: Response) => res.json());
    }
}

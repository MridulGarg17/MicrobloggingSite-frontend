import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
    BASE_URL = 'http://localhost:51154/api/user/signup';

    httpOptions = {

        headers: new HttpHeaders({

            'Content-Type': 'application/x-www-form-urlencoded'
        })
    };

    constructor(private http: HttpClient) { }

    toQueryString(obj) {
        var parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }

    postUser(user) {
        var data = this.toQueryString(user);
        return this.http.post(this.BASE_URL, data, this.httpOptions);
    }

    getCountry() {

        return this.http.get('http://localhost:51154/api/user/country');
    }

}

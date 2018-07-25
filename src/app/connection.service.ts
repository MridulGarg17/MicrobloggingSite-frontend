import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
    BASE_URL = 'http://localhost:51154/Api/connection/';
    constructor(private http: HttpClient) { }
    httpOptions = {

        headers: new HttpHeaders({

            'Content-Type': 'application/x-www-form-urlencoded'
        })
    };
    getfollowers() {
        return this.http.get(this.BASE_URL + "followers/" + localStorage.getItem('sessionId'));
    }

    getfollowee() {
        return this.http.get(this.BASE_URL + "followees/" + localStorage.getItem('sessionId'));
    }

    toQueryString(obj) {
        var parts = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
        }
        return parts.join("&");
    }

    unfollow(fId: number) {
        let dto = {
            fid: fId,
            sessionId: localStorage.getItem('sessionId')

        }
        var data = this.toQueryString(dto);
        return this.http.put('http://localhost:51154/api/connection/Unfollow/',data,this.httpOptions);
    }

    follow(fId: number) {
        let dto = {
            fid: fId,
            sessionId: localStorage.getItem('sessionId')

        }

        var data = this.toQueryString(dto);
        return this.http.post('http://localhost:51154/api/connection/follow/', data, this.httpOptions);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SearchService {
    BASE_URL = 'http://localhost:51154/api/search/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        })
    };


    constructor(private http: HttpClient) { }

    SearchTweets(tag : string) {
        return this.http.get(this.BASE_URL+"tweet/"+tag);
    }

    SearchPerson(tag: string) {
        return this.http.get(this.BASE_URL + "user/" + tag + "/" + localStorage.getItem('uid'));
    }
}

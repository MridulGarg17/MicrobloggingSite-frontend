import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    BASE_URL = 'http://localhost:51154/api/analytics/bonus';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
        })
    };


    constructor(private http: HttpClient) { }

    getAnalysis() {
        return this.http.get(this.BASE_URL);
    }

}
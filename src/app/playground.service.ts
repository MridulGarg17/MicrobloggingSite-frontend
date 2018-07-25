import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
    providedIn: 'root'
})
export class PlaygroundService {
    BASE_URL = 'http://localhost:51154/Api/Tweet/';

    httpOptions = {

        headers: new HttpHeaders({

            'Content-Type': 'application/x-www-form-urlencoded'
        })
    };


    constructor(private http: HttpClient) { }

    getTweets() {
        console.log(localStorage.getItem('sessionId'));
        return this.http.get<any[]>(this.BASE_URL + localStorage.getItem('sessionId'));
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

    postTweet(tweet: string) {


        var newTweet = {
            Body: tweet,
            User_id: localStorage.getItem('uid'),
            SessionId: localStorage.getItem('sessionId')
        }

        //       let newTweet = "body='testing'&User_id=2";

        var data = this.toQueryString(newTweet);
        return this.http.post(this.BASE_URL, data, this.httpOptions);
    }

    updateTweet(tweet: string, tid:number) {


        var newTweet = {
            Body: tweet,
            User_id: localStorage.getItem('uid'),
            SessionId: localStorage.getItem('sessionId'),
            id : tid
        }

        //       let newTweet = "body='testing'&User_id=2";

        var data = this.toQueryString(newTweet);
        return this.http.put(this.BASE_URL, data, this.httpOptions);
    }

    postReaction(tweetId: number, reaction: boolean) {

        var tweet = {
            Post_id: tweetId,
            user_id: localStorage.getItem('uid'),
            Reaction: reaction,
            SessionId: localStorage.getItem('sessionId')
        }

        var data = this.toQueryString(tweet);
        return this.http.post('http://localhost:51154/api/reaction', data, this.httpOptions);

    }

    getUsers(tid:number) {
        return this.http.get('http://localhost:51154/api/reaction/allusers/' + tid);
    }

    deleteTweet(tweetId: number) {

        return this.http.delete(this.BASE_URL + localStorage.getItem('sessionId') + '/' + tweetId);
    }

}




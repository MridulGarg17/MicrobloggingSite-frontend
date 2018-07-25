import { Component, OnInit ,Inject} from '@angular/core';
import { Observable } from 'rxjs';
import { PlaygroundService } from '../../playground.service';
import { ComposeComponent } from '../Compose/Compose.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SigninService } from '../../signin.service';
import  * as _swal  from  'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const  swal: SweetAlert = _swal  as any;
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
    isPopupOpened = false;
    public tweetList :any[]=[];
    reaction;
    check: boolean = false;
    userlist;

    constructor(private data: PlaygroundService, private data1: SigninService, private router: Router) { }
    uId = localStorage.getItem('uid');
    ngOnInit() {
        if (localStorage.getItem('sessionId')==null) {
            this.router.navigate(["login"]);
        } else {
            //console.log(localStorage.getItem('sessionId'));
            this.data.getTweets()
                .subscribe((res: any[]) => {
                    console.log("hello");
                    //console.log(res);
                    this.tweetList = res;
                    //console.log(this.tweetList);
                })
        }
        
    }

    

    compose(tweet: string) {
        tweet = tweet.trim();
        if (tweet.length == 0 || tweet.toString() == "" || tweet.length>240) {
            console.log("sghk");
            
            swal("Tweet can't be empty");
        }
        else {
            this.data.postTweet(tweet)
                .subscribe(res => {
                    this.ngOnInit();

                })
        }
       
    }

    Edit(tweet: string, tid: number) {
        tweet = tweet.trim();
        
        if (tweet.length == 0 || tweet.toString() == "" || tweet.length > 240) {
            console.log("sghk");

            swal("Tweet can't be empty");
        } else {
           
            this.data.updateTweet(tweet, tid)
                .subscribe(res => {
                    console.log(res);
                    this.ngOnInit();
                })

        }

    }

    Like(tweetId : number) {
        console.log(tweetId);
        this.data.postReaction(tweetId, true)
            .subscribe(res => {
                this.ngOnInit();
            })
    }

    DisLike(tweetId: number) {
        this.data.postReaction(tweetId, false)
            .subscribe(res => {
                this.ngOnInit();
            })
    }

    Delete(tweetId:number,userId:number) {

        if (userId.toString() == localStorage.getItem('uid')) {

            this.data.deleteTweet(tweetId)
                .subscribe(res => {
                    console.log(res);
                    this.ngOnInit();
                })
        }
    }


    GetAllUsers(tId: number) {
        this.data.getUsers(tId)
            .subscribe(res => {
                this.userlist = res;
                console.log(this.userlist);
            })
    }

    logout() {
        this.data1.logout()
            .subscribe(res => {

                localStorage.removeItem('sessionId');
                this.router.navigate(["login"]);
            })

    }
    
}


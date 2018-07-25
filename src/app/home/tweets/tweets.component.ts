import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from '../../signin.service'
@Component({
    selector: 'app-tweets',

  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
    tweetList;
    tag: string;
    constructor(private data: SearchService, private route: ActivatedRoute, private data1: SigninService, private router: Router) {
        console.log("hi in here");
        this.route.params.subscribe((params) => {
            this.tag = params["tag"];
        })
    }

    ngOnInit() {
        if (localStorage.getItem('sessionId')==null) {
            this.router.navigate(["login"]);
        } else {
            this.data.SearchTweets(this.tag)
                .subscribe((res) => {
                    console.log(res);
                    this.tweetList = res;
                })
        }
  }


    logout() {
        this.data1.logout()
            .subscribe(res => {

                localStorage.removeItem('sessionId');
                this.router.navigate(["login"]);
            })

    }


}

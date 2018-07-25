import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnalyticsService } from '../../analytics.service';
import { SigninService } from '../../signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
    Bonus: Object;
    constructor(private data: AnalyticsService, private data1: SigninService,private router:Router) {
        
    }

    ngOnInit() {

        if (localStorage.getItem('sessionId')==null) {
            this.router.navigate(["login"]);
        }
        else {
            this.data.getAnalysis()
                .subscribe((res) => {
                    console.log("hello");
                    console.log(res);
                    this.Bonus = res;
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

import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../signin.service';
import { Observable } from 'rxjs';
import { ConnectionService } from '../../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followees',
  templateUrl: './followees.component.html',
  styleUrls: ['./followees.component.css']
})
export class FolloweesComponent implements OnInit {
    followees;
    constructor(private data: ConnectionService, private data1: SigninService,private router:Router) { }

    ngOnInit() {
        if (localStorage.getItem('sessionId')==null) {
            this.router.navigate(["login"]);
        } else {
            this.data.getfollowee()
                .subscribe((res) => {
                    console.log("hello");
                    console.log(res);
                    this.followees = res;
                })
        }
    }

    unfollow(fid: number) {
        this.data.unfollow(fid)
            .subscribe(res => {
                console.log(res); 
                this.ngOnInit();
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

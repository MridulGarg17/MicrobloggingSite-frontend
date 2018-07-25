import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../../connection.service'
import { SigninService } from '../../signin.service';
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
    personList;
    tag: string;
    constructor(private data: SearchService, private route: ActivatedRoute, private data2: ConnectionService, private data3: SigninService, private router: Router) {
        console.log("hi in here");
        this.route.params.subscribe((params) => {
            this.tag = params["tag"];
        })
    }

    ngOnInit() {

        if (localStorage.getItem('sessionId')==null) {
            this.router.navigate(["login"]);
        } else {
            this.data.SearchPerson(this.tag)
                .subscribe((res) => {
                    console.log(res);
                    this.personList = res;
                })
        }
    }

    unfollow(fid: number) {
        this.data2.unfollow(fid)
            .subscribe(res => {
                console.log(res);
                this.ngOnInit();
            })
    }

    follow(fid: number) {
        this.data2.follow(fid)
            .subscribe(res => {
                console.log(res);
                this.ngOnInit();
            })
    }

    logout() {
        this.data3.logout()
            .subscribe(res => {

                localStorage.removeItem('sessionId');
                this.router.navigate(["login"]);
            })

    }

}

import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../signin.service'
import { Router } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    tweetList;
    userList;
    constructor(private data: SigninService, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('sessionId')==null) {
            this.router.navigate(["login"]);
        }
  }



  searchtweetnav(tag: string) {
      tag = tag.trim();
      if (!tag) {
          swal("cant search empty tag");
      } else {
          this.router.navigate(["search/tweets", tag]);
      }
  }

  searchpersonnav(tag: string) {
      tag = tag.trim();
      if (!tag) {
          swal("cant search empty tag");
      } else {
          this.router.navigate(["search/persons", tag]);
      }
  }

  logout() {
      this.data.logout()
          .subscribe(res => {

              localStorage.removeItem('sessionId');
              this.router.navigate(["login"]);
          })

  }

}

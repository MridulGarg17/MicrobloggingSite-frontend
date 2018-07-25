import { Component, OnInit } from '@angular/core';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private data: SigninService, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('sessionId')==null) {
            this.router.navigate(["login"]);
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

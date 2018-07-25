import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SigninService } from '../signin.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    constructor(private router: Router, private data: SigninService) { }

    x;
    checkEmail: boolean = false;
    checkPassword: boolean = false;

  ngOnInit() {
  }


  login(email: string, password: string) {

      let flag = true;
      if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(email)) {
          console.log(email)
          this.checkEmail = true;
          flag = false;;
      }
      if (!new RegExp("^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$").test(password)) {
          console.log(password);
          this.checkPassword = true;
          flag = false;
      }
      else
          flag = true;

      if (flag) {

          let loggedData = {
              'Email': email,
              'Password': password
          }

          this.data.loginservice(loggedData)
              .subscribe(res => {
                  console.log(res);
                  this.x = res;
                  if (this.x.userId > 0) {
                      localStorage.setItem('uid', this.x.userId);
                      localStorage.setItem('sessionId', this.x.SessionId);
                      this.router.navigate(["home"]);
                  } else {
                      swal("Invalid Details");
                      this.router.navigate(["login"]);
                  }
              })
      }
}

  signup() {
      this.router.navigate(["signup"]); 
  }

}

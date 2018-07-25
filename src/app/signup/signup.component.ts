import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { SignupService } from '../signup.service'
import { Router } from '@angular/router';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    
    countrylist;
    checkName: boolean = false;
    checkEmail: boolean = false;
    checkPhone: boolean = false;
    checkImage: boolean = false;
    checkCountry: boolean = false;
    checkPassword: boolean = false;




    constructor(private data: SignupService, private router: Router) {
        
    }

    ngOnInit() {

        this.data.getCountry()
            .subscribe(res => {
                console.log(res);
                this.countrylist = res;
            })

        
  }

    login() {
        this.router.navigate(["login"]);
    }

    private imageSrc: string = '';
    file1: File;
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.file1 = file;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc)
    }

    addUser(firstname: string, lastname: string, email: string, image: string, phone: string, countryId: number, password: string) {
        let flag = true;
        if (!firstname || !lastname) {

            this.checkName = true;
            flag = false;
        }
         else if (!new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$").test(email)) {
            this.checkEmail = true;
            flag = false;
        }
         else if (!new RegExp("[0-9]{10}").test(phone)) {
            this.checkPhone = true;
            flag = false;
        }
        else if (!new RegExp("^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,10}$").test(password)) {
            this.checkPassword = true;
            flag = false;
        }
         else if (countryId.toString() === "Select Country") {
            console.log("nafkm");
            this.checkCountry = true;
            flag = false;
        }
       else  if (!image) {
            this.checkImage = true;
            flag = false;
        }
        
      
        if(flag){
          console.log("call is being made");
          let newUser = {

              'Firstname': firstname,
              'Lastname': lastname,
              'Image': this.file1,
              'Email': email,
              'Phone': phone,
              'Country_Id': countryId,
              'Password': password,
              
          }

          console.log(newUser);

          this.data.postUser(newUser)
              .subscribe(res => {
                  console.log(res);
                  if (res == true) {
                      this.router.navigate(["login"]);
                  }
              })
      }
  }

}

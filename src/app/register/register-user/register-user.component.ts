import {Component, OnInit, ViewChild,ElementRef} from '@angular/core';
import {Http,RequestOptions,Headers} from "@angular/http";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  constructor(private http:Http) { }
  @ViewChild('registerForm') registerForm:ElementRef;
  @ViewChild('organizationName') organizationName:ElementRef;
  @ViewChild('email') email:ElementRef;
  @ViewChild('password') password:ElementRef;
  @ViewChild('confirmPassword') confirmPassword:ElementRef;
  ngOnInit() {
    this.http.get('http://13.126.10.232:8000/api/auth/preregister/ioejru3p2r8bosmadiartu7b5h04b4drfhth3sdvnbebobj5lg5rhu1ffb09bm5039hi57a6loiv5d2rbk0dnom96smj96a6lg58vnlmot37qqghanovqp6t',
      null).
    subscribe(
      (response) => this.showUI(response),
      (error) => console.log(error)
    );
  }
  onRegister(){
    let headers2 = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers2 });
    this.http.post('http://13.126.10.232:8000/api/auth/register',
      {

      },
      options).
    subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  showUI(response){
    console.log(response.json().email)
    this.registerForm.nativeElement.removeAttribute("hidden");
    this.organizationName.nativeElement.value = response.json().organisationName;
    this.email.nativeElement.value = response.json().email;


  }

}

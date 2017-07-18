import {Component, OnInit} from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import { Headers } from '@angular/http';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email:'vipul@ymail.com',
    organisationName: 'dsfdfdgds'
  };

  constructor(private  http: Http) {
  }

  ngOnInit() {
  }

  onPreRegister() {
    let headers2 = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers2 });
    return this.http.get('http://13.126.10.232:8000/api/auth/preregister',
      options).
    subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}

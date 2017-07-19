import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Headers, RequestOptions} from "@angular/http";
import {ActivatedRoute, Params} from "@angular/router";
import {NetworkService} from "../services/network-services";
import {RegisterModel} from "app/model/register-model";
import {PreRegisterModel} from "../model/preregister-model";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {
  private token: string;
  private registerModel: RegisterModel = new RegisterModel;
  private preRegisterModel: PreRegisterModel = new PreRegisterModel;

  @ViewChild('password') password: ElementRef;
  @ViewChild('confirmPassword') confirmPassword: ElementRef;

  constructor(private networkService: NetworkService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.token = params['token'];
      this.registerModel.token = this.token;
      console.log(this.token);

      this.networkService.getPreRegister(this.token).subscribe(
        (response) => this.preRegisterModel = response.json(),
        (error) => console.log(error),
      );
    });

  }

  onRegister() {
    console.log(this.password.nativeElement.value);
    console.log(this.confirmPassword.nativeElement.value);
    let headers2 = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers2});
    this.networkService.register(this.registerModel).subscribe(
      (response) => this.showDashboard(),
      (error) => console.log(error)
    );
  }

  showDashboard() {
    console.log("Successful.. showing dashboard")

  }


}

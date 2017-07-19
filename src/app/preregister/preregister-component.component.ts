import {Component, OnInit} from "@angular/core";
import {NetworkService} from "../services/network-services";
import {PreRegisterModel} from "../model/preregister-model";

@Component({
  selector: 'app-register-component',
  templateUrl: './preregister-component.component.html',
  styleUrls: ['./preregister-component.component.css']
})
export class PreRegisterComponent implements OnInit {
  preRegisterModel: PreRegisterModel = new PreRegisterModel;

  constructor(private networkService: NetworkService) {
  }

  ngOnInit() {
  }

  onPreRegister() {
    this.networkService.preregister(this.preRegisterModel).subscribe(
      (response) => this.showVerificationPage(),
      (error) => console.log(error)
    );
  }

  showVerificationPage() {
    console.log("Successful.. check email")
  }

}

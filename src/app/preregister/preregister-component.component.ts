import {Component, OnInit, ViewChild} from "@angular/core";
import {NetworkService} from "../services/network-services";
import {PreRegisterModel} from "../model/preregister-model";

@Component({
  selector: 'app-register-component',
  templateUrl: './preregister-component.component.html',
  styleUrls: ['./preregister-component.component.css']
})
export class PreRegisterComponent implements OnInit {
  preRegisterModel: PreRegisterModel = new PreRegisterModel;
  @ViewChild("form") form
  @ViewChild("verify") verify
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
    this.verify.nativeElement.removeAttribute("hidden");
    this.form.nativeElement.setAttribute("hidden", true);


  }

}

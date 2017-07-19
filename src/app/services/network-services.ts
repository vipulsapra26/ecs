import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {PreRegisterModel} from "../model/preregister-model";
import {RegisterModel} from "../model/register-model";

@Injectable()
export class NetworkService {
  URL: string = 'http://13.126.10.232:8000/api/';

  constructor(private http: Http) {
  }

  preregister(preRegisterModel: PreRegisterModel) {
    let headers2 = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers2});

    return this.http.post(this.URL + 'auth/preregister', preRegisterModel, options);
  }

  getPreRegister(token: string) {
    return this.http.get(this.URL + 'auth/preregister/' + token, null);
  }

  register(registerModel: RegisterModel) {
    let headers2 = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers2});
    return this.http.post(this.URL + 'auth/register', registerModel, options);
  }

}

import {Injectable} from "@angular/core"
import {HttpAdaptor} from '../classes/http.class'

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

	constructor(private http: HttpAdaptor){}

	Login(cellphone:String,pwd:String){
		return this.http.Post('login',{cellphone:cellphone,password:pwd});
	}
}
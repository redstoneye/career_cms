import {Injectable} from "@angular/core"
import {Http,Headers,RequestOptions} from "@angular/http";
import { Promise } from "es6-promise";
import {UrlConf} from './url-conf.class';

@Injectable()
export class HttpAdaptor {

	url_conf = new UrlConf();

	constructor(private http: Http){}

	headers = new Headers({ 'Content-Type': 'application/json' });
	options = new RequestOptions({ headers: this.headers });

	Post(api_name:string,params:Object):Promise<Object|[any]> {
		let url = this.url_conf.GetUrl(api_name);
		return this.http.post(url,params,this.options)
			.map(res => res.json())
			.toPromise()
			.then(value => {return value})
	}

	Get(api_name:string,params:Object):Promise<Object|[any]> {
		let url = this.url_conf.GetUrl(api_name);
		for(let key in params){
			url += "$"+key +"=" + params[key]
		}
		return this.http.get(url,this.options)
			.map(res => res.json())
			.toPromise()
			.then(value => {return value})
	}
}
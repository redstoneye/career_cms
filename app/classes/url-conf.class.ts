export class UrlConf {
	constructor (

		private env:string = 'dev',

		private base_dev:string = 'http://localhost:3000',
		private base_pro:string = 'http://123.56.148.16:80',
		private login:string = '/login'

	){}

	GetUrl(api_name:string) : string {
			return this['base_'+this.env] + this[api_name];
	}
}
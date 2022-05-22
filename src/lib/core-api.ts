import { request } from "./request";

export class CoreApi {
	http = request;

	constructor(public _basePath: string) {
		this._basePath = _basePath;
	}

	findAll() {
		return this.http.get(`${this._basePath}?populate=deep,10`);
	}

	findOne(id: number) {
		return this.http.get(`${this._basePath}/${id}?populate=deep,10`);
	}
}

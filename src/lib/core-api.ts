import { request } from "./request";

type Operators =
	| "$eq"
	| "$ne"
	| "$lt"
	| "$lte"
	| "$gt"
	| "$gte"
	| "$in"
	| "$notIn";

type ParamsType = "sort" | "filters";

type Params = {
	[paramsType in ParamsType]:
		| {
				field: string;
				operator?: Operators;
				value?: string;
		  }
		| undefined;
};

export class CoreApi {
	http = request;

	constructor(public _basePath: string) {
		this._basePath = _basePath;
	}

	private stringifySearchQuery(params: Params) {
		return Object.keys(params)
			.map((param) => {
				if (Boolean(params[param as ParamsType] && param === "sort")) {
					const field = params[param as ParamsType]?.field.replace(":", "%3A");
					return `${param}=${field}`;
				}
				if (Boolean(params[param as ParamsType]) && param === "filters") {
					const field = params[param]?.field;
					const operator = params[param]?.operator;
					const value = params[param]?.value;
					return `${param}[${field}][${operator}]=${value}`;
				}
				return "";
			})
			.join("&");
	}

	findAll(params?: Params) {
		if (Boolean(params)) {
			const queryParams = this.stringifySearchQuery(params as Params);
			return this.http.get(`${this._basePath}?populate=deep,10&${queryParams}`);
		}
		return this.http.get(`${this._basePath}?populate=deep,10`);
	}

	findOne(id: number) {
		return this.http.get(`${this._basePath}/${id}&populate=deep,10`);
	}
}

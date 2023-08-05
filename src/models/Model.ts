import { makeQueryParams } from "@/services/helpers";
import { Product } from "./Product";

type ParamsType = {
  paginate?: boolean;
  limit?: number;
  filter?: {
    [key: string]: any;
  };
} & {
  [key: string]: string;
};
export class Model {
  public query: string = "";
  public params: ParamsType = {};

  resource() {
    return "";
  }

  // Define a base url for a REST API
  baseURL() {
    let baseUrl = process.env.BASE_API_URL || "http://localhost:3000/api";
    return baseUrl;
  }

  // Implement a default request method
  request(url: string, config: {}) {
    return fetch(url, config);
  }

  public async get(): Promise<Response> {
    const url = this.generateUrl();
    const response = await this.request(url, { method: "GET" });
    return response;
  }

  public async $get() {
    const response = await this.get();
    return await response.json();
  }

  public async find(id: number): Promise<Product | undefined> {
    const response = await this.where("id", id).limit(1).paginate(false).get();
    const { data }: { data: Product[] } = await response.json();

    return data[0];
  }

  public paginate(hasPaginate: boolean) {
    this.params.paginate = hasPaginate;
    return this;
  }

  public limit(limit: number) {
    this.params.limit = limit;
    return this;
  }

  public where(field: string, value: string | number) {
    this.params.filter = {
      ...this.params.filter,
      [field]: value,
    };

    return this;
  }

  public whereIn(field: string, value: string[] | number[]) {
    let array = value.join(",");

    this.params.filter = {
      ...this.params.filter,
      [field]: array,
    };

    return this;
  }

  public whereRelation(relation: string, value: number[]) {
    let array = value.join(",");
    this.params[relation] = array;

    return this;
  }

  private generateUrl(): string {
    this.query = makeQueryParams(this.params);
    let url = `${this.baseURL()}/${this.resource()}${this.query}`;
    return url;
  }

  // public where(...arg: string[]) {
  //     if (arg.length < 2 || arg.length > 3) {
  //         throw new Error("Invalid arguments");
  //     }

  //     let compare = "=";
  //     let value = arg[1];

  //     if (arg.length == 3) {
  //         compare = arg[1];
  //         value = arg[2];
  //     }

  //     this.params.filters = {
  //         ...this.params.filters,
  //         [arg[0]]: [compare, value]
  //     };

  //     return this;
  // }

  // public setQuery(url: string) {
  //     this.query = url;
  //     return this;
  // }
}

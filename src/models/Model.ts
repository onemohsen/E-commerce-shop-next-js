
export class Model {

    public query: string = ""

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

    public get(): Promise<Response> {
        let url = `${this.baseURL()}/${this.resource()}${this.query}`

        return this.request(url, { method: 'GET' })
            .then((response) => {
                return response
            })
    }

    public setQuery(url: string) {
        this.query = url;
        return this;
    }
}
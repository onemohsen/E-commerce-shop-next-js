
type Params = {
    page?: string,
    perPage?: string,
    imageQuilty?: string,
}

export class QueryParamsClass {

    private query: any;
    private params: Params = {
        page: "1",
        perPage: "6",
        imageQuilty: "900",
    };


    constructor(query: any, params?: Params) {
        this.query = query;

        if (params) this.params = { ...this.params, ...params };

        this.init();
    }


    private init = () => {
        this.setParams();
    }


    private setParams = () => {

        if (this.query) {
            if (typeof this.query.imageQuilty == 'string' && this.query.imageQuilty) this.params.imageQuilty = this.query.imageQuilty.split(',')[0];
            if (typeof this.query.page == 'string' && this.query.page) this.params.page = this.query.page.split(',')[0];
            if (typeof this.query.perPage == 'string' && this.query.perPage) this.params.perPage = +this.query.perPage.split(',')[0] > 30 ? "30" : this.query.perPage.split(',')[0];
        }

    }

    getParams = () => {
        return this.params;
    }

}
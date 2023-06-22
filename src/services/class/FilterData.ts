import { MetaPaginate } from './../../models/Types';
export class FilterData<T extends { [key: string]: any }> {
    private data;
    private filters;
    private meta: { paginate?: MetaPaginate | undefined };

    constructor(data: T[] | [], filters: { [key: string]: string | string[] | undefined } = {}) {
        this.filters = filters;
        this.data = data;
        this.meta = {};
    }

    private getFilterField(filter: string) {
        switch (filter) {
            case 'brands':
            case 'categories':
            default:
                return 'id';
        }
    }

    private filtersData() {

        if (Object.keys(this.filters).find(i => i === 'page')) this.setMetaPaginate();

        Object.keys(this.filters).forEach((filterKey) => {
            this.data = this.data.filter(item => {
                if (item && item[filterKey]) {
                    const field = this.getFilterField(filterKey);
                    if (Array.isArray(item[filterKey])) {
                        let isEqual = false;
                        item[filterKey].forEach((element: { [x: string]: string; }) => {
                            if (this.filters[filterKey]?.includes(element[field])) {
                                return isEqual = true;
                            };
                        });
                        return isEqual;
                    }

                    if (
                        typeof item[filterKey] === 'string' ||
                        typeof item[filterKey] === 'number' ||
                        typeof item[filterKey] === 'boolean'
                    ) {
                        if (this.filters && item[filterKey][field] == this.filters[filterKey]) {
                            return true;
                        }
                    }

                }
                return false;
            });
        });

        if (this.meta.paginate) {
            this.paginateData();
        }
    }

    private setMetaPaginate() {
        const page: number = + (this.filters.page as string);
        const perPage: number = + (this.filters.perPage as string);
        const totalData = this.data.length;
        this.meta = {
            paginate: {
                current_page: page,
                from: page,
                last_page: Math.ceil(totalData / +perPage),
                per_page: +perPage,
                total: totalData,
            }
        }
        delete this.filters.page;
        delete this.filters.perPage;
    }

    private paginateData() {
        if (this.meta.paginate) {
            this.meta.paginate.last_page = Math.ceil(this.data.length / +this.meta.paginate?.per_page);
            this.meta.paginate.total = this.data.length;
            const { current_page, per_page } = this.meta.paginate;
            this.data = this.data.slice((current_page - 1) * per_page, current_page * per_page);
        }
    }

    get() {
        if (Object.keys(this.filters).length > 0) this.filtersData();

        return {
            data: this.data,
            meta: this.meta,
        };
    }
}

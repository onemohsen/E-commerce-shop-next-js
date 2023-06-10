export class FilterData<T extends { [key: string]: any }> {
    private data;
    private filters;

    constructor(data: T[] | [], filters: { [key: string]: string | string[] | undefined } = {}) {
        this.filters = filters;
        this.data = data;
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

        Object.keys(this.filters).forEach((filterKey) => {
            this.data = this.data.filter(item => {
                if (item && item[filterKey]) {
                    const field = this.getFilterField(filterKey);
                    if (Array.isArray(item[filterKey])) {
                        let isEqual = false;
                        item[filterKey].forEach((element: { [x: string]: string | string[] | undefined; }) => {
                            if (element[field] == this.filters[filterKey]) {
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
    }

    getData() {
        if (Object.keys(this.filters).length > 0) this.filtersData();
        return this.data;
    }
}

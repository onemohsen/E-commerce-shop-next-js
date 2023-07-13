const makeQueryParams = (queryParams: { [k: string]: any } = {}, name?: string, values?: number[] | string[]) => {
    let filterQuery = { ...queryParams };

    const valuesString = values ? values.join(",") : "";
    const item = valuesString.length && name ? { [name]: valuesString } : {};
    filterQuery = { ...filterQuery, ...item };

    if (!Object.keys(item).length && name && Object.keys(filterQuery).includes(name))
        delete filterQuery[name];

    const queryString = Object.keys(filterQuery)
        .map((key) => makeQueryRecursiveFunction(key, filterQuery[key]))
        .join("&");

    return queryString.length ? "?" + queryString : "";
}


const makeQueryRecursiveFunction = (key: string, value: any, defaultValue = "") => {
    let queryString = defaultValue;

    if (typeof value == 'object') {
        queryString += Object.keys(value).map(k => makeQueryRecursiveFunction(`${key}[${k}]`, value[k], queryString)).join("&");
        return queryString;
    }

    const values = value;
    return `${encodeURIComponent(key)}=${encodeURIComponent(values)}`;
}


export default makeQueryParams;
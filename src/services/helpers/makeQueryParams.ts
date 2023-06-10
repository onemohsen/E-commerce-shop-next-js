const makeQueryParams = (queryParams: { [k: string]: any } = {}, name?: string, values?: number[] | string[]) => {
    let filterQuery = { ...queryParams };

    const valuesString = values ? values.join(",") : "";
    const item = valuesString.length && name ? { [name]: valuesString } : {};
    filterQuery = { ...filterQuery, ...item };

    if (!Object.keys(item).length && name && Object.keys(filterQuery).includes(name))
        delete filterQuery[name];

    const queryString = Object.keys(filterQuery)
        .map((key) => {
            const values = filterQuery[key];
            return `${encodeURIComponent(key)}=${encodeURIComponent(values)}`;
        })
        .join("&");


    return queryString.length ? "?" + queryString : "";
}


export default makeQueryParams;
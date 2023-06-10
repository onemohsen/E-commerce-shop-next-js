export type JsonRespone = {
    data?: Array<unknown> | {},
    message: string,
    statusCode: number
};

export type BreadcrumbsType = {
    name: string,
    href?: string
}

export type DrowpdownItemType = {
    name: string;
    value: number;
};

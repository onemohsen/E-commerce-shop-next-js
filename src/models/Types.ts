export type MetaRespone = {
    paginate?: MetaPaginate
};

export type MetaPaginate = {
    current_page: number,
    from: number,
    last_page: number,
    per_page: number,
    total: number,
}

export type JsonRespone = {
    data?: Array<unknown> | {},
    message: string,
    statusCode: number,
    meta?: MetaRespone,
};

export type BreadcrumbsType = {
    name: string,
    href?: string
}

export type DrowpdownItemType = {
    id: number;
    name: string;
};


export type DrowpdownType = {
    header: string;
    items: DrowpdownItemType[];
};

export type ShapeStartIconType = "full" | "half" | "empty";

export type ProductFilterType = {
    header: string;
    show: boolean;
    items: DrowpdownItemType[];
    maxShowList?: number;
    isCheckBox?: boolean;
};
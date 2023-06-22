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
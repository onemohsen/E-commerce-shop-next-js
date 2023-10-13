import { MetaPaginate } from "../models/Types";
export class FilterDataClass<T extends { [key: string]: any }> {
  private data;
  private meta: { paginate?: MetaPaginate | undefined };
  private params;
  private filters;

  constructor(
    data: T[] | [],
    params: { [key: string]: string | string[] | undefined } = {},
    filters: { [key: string]: string } = {},
  ) {
    this.data = data;
    this.meta = {};
    this.params = params;
    this.filters = filters;
  }

  private getFilterField(filter: string) {
    switch (filter) {
      case "brands":
      case "categories":
      default:
        return "id";
    }
  }

  private filtersData() {
    if (Object.keys(this.params).find((i) => i === "page"))
      this.setMetaPaginate();

    const exceptParams = Object.keys(this.params).filter(
      (i) => !this.exceptParams().includes(i),
    );

    exceptParams.forEach((filterKey) => {
      this.data = this.data.filter((item) => {
        if (item && item[filterKey]) {
          const field = this.getFilterField(filterKey);
          if (Array.isArray(item[filterKey])) {
            let isEqual = false;
            item[filterKey].forEach((element: { [x: string]: string }) => {
              if (this.params[filterKey]?.includes(element[field])) {
                return (isEqual = true);
              }
            });
            return isEqual;
          }

          if (
            typeof item[filterKey] === "string" ||
            typeof item[filterKey] === "number" ||
            typeof item[filterKey] === "boolean"
          ) {
            if (
              this.params &&
              item[filterKey][field] == this.params[filterKey]
            ) {
              return true;
            }
          }
        }
        return false;
      });
    });

    if (Object.keys(this.filters).length) {
      Object.keys(this.filters).forEach((filterKey) => {
        this.data = this.data.filter((data) => {
          if (typeof this.filters[filterKey] == "object") {
            return this.filters[filterKey].includes(data[filterKey].toString());
          }

          if (this.filters[filterKey].startsWith("%")) {
            const valueWithoutPercent = this.filters[filterKey]
              .toLowerCase()
              .slice(1);

            return data[filterKey].toLowerCase().includes(valueWithoutPercent);
          }

          return data[filterKey] == this.filters[filterKey];
        });
      });
    }

    if (this.params.limit)
      [(this.data = this.data.slice(0, +this.params.limit))];

    if (this.meta.paginate) {
      this.paginateData();
    }
  }

  private setMetaPaginate() {
    const page: number = +(this.params.page as string);
    const perPage: number = +(this.params.perPage as string);
    const totalData = this.data.length;
    this.meta = {
      paginate: {
        current_page: page,
        from: page,
        last_page: Math.ceil(totalData / +perPage),
        per_page: +perPage,
        total: totalData,
      },
    };
  }

  private paginateData() {
    if (this.meta.paginate) {
      this.meta.paginate.last_page = Math.ceil(
        this.data.length / +this.meta.paginate?.per_page,
      );
      this.meta.paginate.total = this.data.length;
      const { current_page, per_page } = this.meta.paginate;
      this.data = this.data.slice(
        (current_page - 1) * per_page,
        current_page * per_page,
      );
    }
  }

  private exceptParams(): string[] {
    return ["paginate", "page", "perPage", "limit", "filter"];
  }

  get() {
    if (Object.keys(this.params).length > 0) this.filtersData();

    return {
      data: this.data,
      meta: this.meta,
    };
  }
}

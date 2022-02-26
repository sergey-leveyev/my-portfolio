class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const tec = this.queryStr.tec
      ? {
          tags: {
            $regex: this.queryStr.tec,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...tec });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //Remove fields from query
    const removeFields = ["tec", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);
    this.query = this.query.find(queryCopy);
    return this;
  }
  // The pagination is not working
  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFeatures;

export const stringifyQueryParams = (query: any) => {
  const parseArr: any = [];
  Object.keys(query).forEach((key) => {
    parseArr.push([key, query[key]]);
  });
  return parseArr;
};

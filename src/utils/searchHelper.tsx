export type SearchParams = {
  [key: string]: string | null;
};

export function getSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
): string {
  const newParams = new URLSearchParams(currentParams.toString());

  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    if (value === null) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
  });

  return newParams.toString();
}

export const updateSearchParam = (
  property: string,
  value: string,
  defaultValue: string,
  currentParams: URLSearchParams,
) => {
  if (value === defaultValue) {
    return { search: getSearchWith(currentParams, { [property]: null }) };
  } else {
    return { search: getSearchWith(currentParams, { [property]: value }) };
  }
};

import React from 'react';

const useQuery = (callback: () => Promise<any>, key?: any) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [isFetched, setIsFetched] = React.useState(false);
  const [data, setData] = React.useState<any>(null);
  console.log({ key });
  const runQuery = React.useCallback(async () => {
    setIsFetching(true);
    setIsFetched(false);

    const response = await callback();

    setIsFetching(false);
    setIsFetched(true);
    setData(response?.data || null);
  }, [callback]);

  React.useEffect(() => {
    if (isFetching || isFetched) return;
    runQuery();
  }, [isFetched, isFetching, runQuery]);

  console.log({ data });
  React.useEffect(() => {
    if (!key) return;
    setIsFetching(false);
    setIsFetched(false);
    setData(null);
  }, [key]);

  return {
    data,
    isFetched,
    isFetching,
  };
};

export default useQuery;

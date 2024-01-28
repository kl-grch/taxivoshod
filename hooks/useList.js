import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useList(page) {
  const { data, error, isLoading } = useSWR(
    `https://taxivoshod.ru/testapi/?w=list&page=${page}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}

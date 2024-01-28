import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useElement(id) {
  const { data, error, isLoading } = useSWR(
    `https://taxivoshod.ru/testapi/?w=item&id=${id}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}

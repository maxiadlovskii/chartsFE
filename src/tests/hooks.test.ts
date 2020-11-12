import { renderHook, act } from "@testing-library/react-hooks";
import { AxiosResponse } from "axios";
import { useFetch } from "../hooks";
import { fetcher, responseMock } from "./moks";

test("should store data", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch(fetcher as (data?: any) => Promise<AxiosResponse>)
  );
  await act(async () => {
    result.current[1]();
    await waitForNextUpdate();
  });
  const store = result.current[0];
  const expectedSuccess = {
    isFetching: false,
    isFailed: false,
    isSuccess: true,
    data: responseMock.data,
    error: null,
  };

  expect(store).toStrictEqual(expectedSuccess);
});

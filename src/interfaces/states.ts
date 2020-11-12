export interface State {
  isFetching: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  data: any;
}

export interface Query {
  [key: string]: string | null | string[];
}

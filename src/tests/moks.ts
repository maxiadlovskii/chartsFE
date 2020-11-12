export const responseMock = {
  data: [
    { glucose: 0.03655853211000364, time: 1587736005 },
    { glucose: 0.03602395397295605, time: 1587736020 },
  ],
};

export const fetcher = (): Promise<any> => Promise.resolve(responseMock);

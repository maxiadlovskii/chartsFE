import React, { useCallback, useEffect, useMemo } from "react";
import { XAxis, YAxis, LineChart, Line } from "recharts";
import { useFetch } from "../hooks";
import { getMeasurementAll } from "../api/charts";
import { Loader } from "./Loader";

export const MeasurementChartAll: React.FC = () => {
  const [{ isFetching, data }, fetchData] = useFetch(getMeasurementAll);
  useEffect(() => fetchData(), [fetchData]);

  const len = useMemo(
    () => (data[0] ? Array.from(Array(data[0].m.length).keys()) : []),
    [data]
  );
  const colorStep = useMemo(
    // eslint-disable-next-line prefer-numeric-literals
    () => Math.trunc(parseInt("0xffffff", 16) / len.length),
    [len]
  );
  const getColor = useCallback(
    (k) => {
      const color10 = k * colorStep;
      const color16 = color10.toString(16);
      if (color16.length % 2) {
        return `#0${color16}`;
      }
      return `#${color16}`;
    },
    [colorStep]
  );
  return (
    <section>
      {isFetching || !data.length ? (
        <Loader />
      ) : (
        <>
          <article>
            <LineChart
              width={1428}
              height={600}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis dataKey="i" />
              <YAxis />
              {len.map((i) => {
                const color = getColor(i);
                return (
                  <Line
                    key={i}
                    type="monotone"
                    dataKey={`m[${i}]`}
                    stroke={color}
                    fill={color}
                    dot={<></>}
                  />
                );
              })}
            </LineChart>
          </article>
        </>
      )}
    </section>
  );
};

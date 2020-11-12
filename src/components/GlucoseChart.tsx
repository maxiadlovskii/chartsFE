import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { useFetch } from "../hooks";
import { getGlucose } from "../api/charts";
import { Loader } from "./Loader";

export const GlucoseChart: React.FC = () => {
  const [{ isFetching, data }, fetchData] = useFetch(getGlucose);
  useEffect(() => fetchData(), [fetchData]);
  return (
    <section>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <article>
            <AreaChart
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
              <defs>
                <linearGradient id="colorGlucose" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="glucose"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorGlucose)"
              />
            </AreaChart>
          </article>
        </>
      )}
    </section>
  );
};

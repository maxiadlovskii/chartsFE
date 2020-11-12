import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useFetch } from "../hooks";
import { getMeasurementSeparate } from "../api/charts";
import { Loader } from "./Loader";

let interval: any = null;
export const MeasurementChartSeparate: React.FC = () => {
  const [{ isFetching, data }, fetchData] = useFetch(getMeasurementSeparate);
  const maxChart = useMemo(() => data.length - 1, [data]);
  const [currentChar, setCurrentChar] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => fetchData(), [fetchData]);
  const handleGoNext = useCallback(() => {
    const nextChart = currentChar + 1 > maxChart ? 0 : currentChar + 1;
    setCurrentChar(nextChart);
  }, [currentChar, maxChart]);
  const handleGoBack = useCallback(() => {
    const nextChart = currentChar - 1 < 0 ? maxChart : currentChar - 1;
    setCurrentChar(nextChart);
  }, [currentChar, maxChart]);
  const togglePlay = useCallback(() => setIsPlaying(!isPlaying), [isPlaying]);
  useEffect(() => {
    if (isPlaying) {
      interval = setInterval(handleGoNext, 500);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [handleGoNext, isPlaying]);

  const charData = useMemo(() => (data.length ? data[currentChar].ms : []), [
    data,
    currentChar,
  ]);
  return (
    <section>
      {isFetching || !data.length ? (
        <Loader />
      ) : (
        <>
          <div>
            <div>{data[currentChar].time}</div>
            <input onClick={handleGoBack} type="button" value="Prev" />
            <input
              onClick={togglePlay}
              type="button"
              value={isPlaying ? "Stop" : "Play"}
            />
            <input onClick={handleGoNext} type="button" value="Next" />
          </div>
          <LineChart
            width={1428}
            height={600}
            data={charData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis dataKey="i" />
            <YAxis domain={[-0.008, 0.02]} />
            <Line type="monotone" dataKey="m" dot={false} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip
              labelFormatter={(value) => (
                <span>
                  <span>{`${data[currentChar].time} `}</span>
                  <b>{` ${value}`}</b>
                </span>
              )}
              formatter={(value) => [value, "Measurement"]}
            />
          </LineChart>
        </>
      )}
    </section>
  );
};

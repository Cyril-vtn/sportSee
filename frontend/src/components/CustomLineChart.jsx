import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../styles/customLineChart.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAverageSessions } from "../services/api.services";
export const CustomLineChart = () => {
  const [data, setData] = useState(undefined);
  const { id } = useParams();
  const jours = [" ", "L", "M", "M", "J", "V", "S", "D", " "];

  useEffect(() => {
    getAverageSessions(id).then((res) => {
      const firstDay = res.data.sessions[0];
      const lastDay = res.data.sessions[res.data.sessions.length - 1];
      res.data.sessions.unshift({
        day: 0,
        sessionLength: firstDay.sessionLength,
      });
      res.data.sessions.push({
        day: 8,
        sessionLength: lastDay.sessionLength,
      });
      setData(res.data);
    });
  }, [id]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="LineChart_tooltip">
          <p>{payload[0].value} min</p>
        </div>
      );
    }

    return null;
  };

  return (
    data && (
      <div className="customLineChart">
        <h3>
          Durée moyenne des <br /> sessions
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data.sessions}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <YAxis domain={["dataMin - 20", "dataMax + 40"]} hide />
            <XAxis
              dataKey="day"
              tickFormatter={(day) => jours[day]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#FFFFFF", fontSize: 12 }}
              opacity={0.5}
              tickMargin={-10}
              minTickGap={20}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#lineGradient)"
              dot={false}
              activeDot={(activeDotProps) => {
                const { index } = activeDotProps;

                if (index === 0 || index === 8) {
                  return null;
                }

                return (
                  <circle
                    cx={activeDotProps.cx}
                    cy={activeDotProps.cy}
                    r={4}
                    fill="#FFFFFF"
                  />
                );
              }}
              strokeWidth={2}
            />
            <Tooltip
              content={({ payload, active }) => {
                if (!payload || payload.length === 0) {
                  return null;
                }

                const currentIndex = payload[0].payload;

                if (currentIndex.day === 0 || currentIndex.day === 8) {
                  return null;
                }
                return <CustomTooltip active={active} payload={payload} />;
              }}
              cursor={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  );
};

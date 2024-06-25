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
  const jours = ["L", "M", "M", "J", "V", "S", "D"];

  useEffect(() => {
    getAverageSessions(id).then((res) => {
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
            margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
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
              tickFormatter={(value) => jours[value - 1]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#FFFFFF", fontSize: 12 }}
              opacity={0.5}
              tickMargin={-10}
            />
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#lineGradient)"
              dot={false}
              activeDot={true}
              strokeWidth={2}
            />
            <Tooltip content={<CustomTooltip />} cursor={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  );
};

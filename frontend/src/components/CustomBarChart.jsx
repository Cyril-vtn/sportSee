import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";
import { useParams } from "react-router-dom";
import { getActivity } from "../services/api.services";
import "../styles/CustomBarChart.css";

export const CustomBarChart = () => {
  const [data, setData] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    getActivity(id).then((res) => {
      setData(res.data);
      console.log(res.data.sessions);
    });
  }, [id]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="barChart_tooltip">
          <p>{payload[0].value}g</p>
          <p>{payload[1].value}kCal</p>
        </div>
      );
    }

    return null;
  };

  return (
    data && (
      <div className="barChart">
        <div className="barChart_header">
          <h2>Activité quotidienne</h2>
          <div className="barChart_legend">
            <div className="barChart_legend_item">
              <span className="barChart_legend_item_color black" />
              <p> Poids (kg)</p>
            </div>
            <div className="barChart_legend_item">
              <span className="barChart_legend_item_color red" />
              <p>Calories brûlées (kCal)</p>
            </div>
          </div>
        </div>
        <ResponsiveContainer
          width={"100%"}
          height={170}
          className="barChart_container"
        >
          <BarChart data={data.sessions} barSize={10}>
            <XAxis
              tickLine={false}
              tickMargin={10}
              dataKey="day"
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.getDate();
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              dataKey="kilogram"
              tickMargin={10}
              axisLine={false}
            />
            <CartesianGrid
              strokeDasharray="5 5"
              horizontal={true}
              horizontalPoints={[0, "50%"]}
              vertical={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="calories"
              fill="#E60000"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  );
};

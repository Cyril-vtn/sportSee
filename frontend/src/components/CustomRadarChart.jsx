import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "../styles/customRadarChart.css";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPerformance } from "../services/api.services";

export const CustomRadarChart = () => {
  const [data, setData] = useState(undefined);
  const { id } = useParams();

  const translateKindToFrench = (kind) => {
    const kindInFrench = {
      1: "Cardio",
      2: "Énergie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };
    return kindInFrench[kind] || kind;
  };

  const transformData = useCallback((data) => {
    const newData = data.data.map((item) => ({
      ...item,
      kind: translateKindToFrench(item.kind),
    }));

    const item6 = newData.find((item) => item.kind === "Intensité");
    const item3 = newData.find((item) => item.kind === "Endurance");

    const filteredData = newData.filter(
      (item) => item.kind !== "Intensité" && item.kind !== "Endurance"
    );

    filteredData.unshift(item6);

    filteredData.splice(3, 0, item3);

    return filteredData;
  }, []);

  useEffect(() => {
    getPerformance(id).then((res) => {
      setData(transformData(res));
    });
  }, [id, transformData]);

  return (
    data && (
      <div className="customRadarChart">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="60%" data={data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              tick={{
                fill: "white",
                fontSize: 12,
              }}
            />
            <Radar
              name="Lily"
              dataKey="value"
              fill="#FF0101"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    )
  );
};

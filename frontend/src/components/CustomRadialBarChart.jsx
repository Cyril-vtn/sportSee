import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import "../styles/customRadialBarChart.css";

export const CustomRadialBarChart = ({ score }) => {
  const scoreData = [{ kind: "Score", value: score * 100 }];

  return (
    scoreData && (
      <div className="customRadialBarChart">
        <div className="customRadialBarChart_title">
          <h3>Score</h3>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="65%"
            outerRadius="78%"
            data={scoreData}
            startAngle={-270}
            endAngle={90}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar dataKey="value" cornerRadius={10} fill="#FF0101" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="customRadialBarChart_score">
          <p>{score && score * 100}%</p>
          <h3 className="customRadialBarChart_score_title">
            de votre <br /> objectif
          </h3>
        </div>
      </div>
    )
  );
};

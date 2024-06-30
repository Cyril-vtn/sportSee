import { useEffect, useState } from "react";
import "../styles/home.css";
import { useParams } from "react-router-dom";
import { getUser } from "../services/api.services";
import { StatCard } from "../components/StatCard";
import { CustomBarChart } from "../components/CustomBarChart";
import { CustomLineChart } from "../components/CustomLineChart";
import { CustomRadarChart } from "../components/CustomRadarChart";
import { CustomRadialBarChart } from "../components/CustomRadialBarChart";
export const Home = () => {
  const { id } = useParams();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getUser(id).then((res) => {
      setData(res.data);
    });
  }, [id]);

  return (
    data && (
      <div className="home">
        <div className="home_content">
          <div className="home_content_title">
            <h1>
              Bonjour <span>{data.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="home_content_stats">
            <div className="home_content_charts">
              <CustomBarChart />
              <div className="home_content_scores">
                <CustomLineChart />
                <CustomRadarChart />
                <CustomRadialBarChart score={data.todayScore} />
              </div>
            </div>
            <div className="home_content_card">
              {Object.entries(data.keyData).map(([key, value], i) => (
                <StatCard key={i} type={key} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

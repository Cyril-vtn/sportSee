import "../styles/statCard.css";
import caloriesIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import fatIcon from "../assets/fat-icon.png";
import { useEffect, useState } from "react";

export const StatCard = ({ type, value }) => {
  const [text, setText] = useState("");
  const [icon, setIcon] = useState(null);
  const [unit, setUnit] = useState("");

  useEffect(() => {
    switch (type) {
      case "calorieCount":
        setText("Calories");
        setUnit("kCal");
        setIcon(caloriesIcon);
        break;
      case "proteinCount":
        setText("Protéines");
        setUnit("g");
        setIcon(proteinIcon);
        break;
      case "carbohydrateCount":
        setText("Glucides");
        setUnit("g");
        setIcon(carbsIcon);
        break;
      case "lipidCount":
        setText("Lipides");
        setUnit("g");
        setIcon(fatIcon);
        break;
      default:
        setIcon(null);
    }
  }, [type]); // Cette fonction s'exécute uniquement lorsque `type` change.

  return (
    <div className="statCard">
      {icon && <img src={icon} alt={type} />}
      <div className="statCard_content">
        <p className="statCard_value">{`${value}${unit}`} </p>
        <p className="statCard_text">{text}</p>
      </div>
    </div>
  );
};
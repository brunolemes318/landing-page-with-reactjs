import React from "react";
import "../../themes/components/card_information.scss";

export default function CardInformation(props) {
  return (
    <div
      className="style-card-information"
      style={{ backgroundColor: props.color }}
    >
      <p className="style-text-of-card"  style={{ color: props.colortext }}>{props.description}</p>
    </div>
  );
}

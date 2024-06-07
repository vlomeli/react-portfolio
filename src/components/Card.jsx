
import { useState } from "react";
import CardData from "./CardData.jsx"; // Assuming CardData is exported correctly

const Card = ({ details }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse the card if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked card
    }
  };

  return (
    <div className="cards-container">
      {details.map((value, index) => (
        <div
          className={`card ${expandedIndex === index ? "expanded" : ""}`}
          onClick={() => handleExpandClick(index)}
          key={index}
        >
          <div className="card-image">
            <img src={value.img} alt={value.title} />
          </div>
          <div>
            <p className="card-title">{value.title}</p>
            <p className="description">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
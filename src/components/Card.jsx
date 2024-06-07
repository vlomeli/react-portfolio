
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

  const handleCloseModal = () => {
    setExpandedIndex(null);
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

      {expandedIndex !== null && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <img
              src={details[expandedIndex].img}
              alt={details[expandedIndex].title}
            />
            <h2>{details[expandedIndex].title}</h2>
            <p>{details[expandedIndex].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
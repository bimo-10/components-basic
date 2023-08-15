import React from "react";

const Cards = ({ title, desc, image }) => {
  return (
    <div>
      <ul id="concepts">
        <li className="concept" key={title[0].title}>
          <img src={image[0].image} alt={title[0].title} />
          <h2>TODO: {title[0].title} </h2>
          <p>TODO: {desc[0].description}</p>
        </li>
        <li className="concept" key={title[1].title}>
          <img src={image[1].image} alt={title[1].title} />
          <h2>TODO: {title[1].title} </h2>
          <p>TODO: {desc[1].description}</p>
        </li>
        <li className="concept" key={title[2].title}>
          <img src={image[2].image} alt={title[2].title} />
          <h2>TODO: {title[2].title} </h2>
          <p>TODO: {desc[2].description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Cards;

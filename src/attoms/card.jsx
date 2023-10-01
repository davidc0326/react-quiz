import React from 'react';
import "./card.css"

function Card({ title, content, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      {children}
    </div>
  );
}

export default Card;

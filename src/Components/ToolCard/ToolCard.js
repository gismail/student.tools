import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './ToolCard.css'; // You can create this CSS file for styling

function ToolCard({ title, categories, description, maxDescriptionLength }) {
  const [isHovered, setIsHovered] = useState(false);

  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength - 3) + '...'
      : description;
  return (

    <div className={`tool-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="tool-content">
        <div className="tool-categories">
          {categories.map((category, index) => (
            <Link key={index} to={`/categories?category=${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>
        <h3 className="tool-title">{title}</h3>
        <div className={`tool-description ${isHovered ? 'expanded' : ''}`}>
          {isHovered ? description : truncatedDescription}
        </div>
      </div>
    </div>
  );
}

export default ToolCard;

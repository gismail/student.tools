import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './ToolCard.css'; // You can create this CSS file for styling

function ToolCard({ id,title, categories, description, maxDescriptionLength }) {
  const [isHovered, setIsHovered] = useState(false);

  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength - 3) + '...'
      : description;
  return (

    <div className={`tool-card-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Link key={id} to={`/operations/operation?id=${id}&name=${title.replace(/ /g, '_')}`} className="tool-card-item-link">
        <div className="tool-card-item-bg"></div>
        <div className="tool-card-item-categories">
          {categories.map((category, index) => (
            <Link key={index} to={`/categories?category=${encodeURIComponent(category)}`}>
              {category}
            </Link>
          ))}
        </div>
        <div className="tool-card-item-title">
          {title}
        </div>

        <div className="tool-card-item-desc-box">
            <div className='tool-card-item-desc '>{isHovered ? description : truncatedDescription}</div>
          
        </div>
      </Link>
    </div>

  );
}

export default ToolCard;

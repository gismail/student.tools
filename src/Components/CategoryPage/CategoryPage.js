import React from 'react';
import { useLocation } from 'react-router-dom';

import ToolCard from '../ToolCard/ToolCard';
import useMaxDescriptionLength from '../../Hooks/useMaxDescriptionLength';
import { useData } from '../../Hooks/DataProvider';


function CategoryPage() {
    const placeholderToolData = useData();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const filteredTools = placeholderToolData.filter(tool =>
        tool.categories.includes(category)
    );
    const maxDescriptionLength = useMaxDescriptionLength(placeholderToolData);
    return (
        <div>
            <h2>Category: {category}</h2>
            <div className="tool-card-box">
                {filteredTools.map((tool) => (
                    <ToolCard
                        key={tool.id}
                        id={tool.id}
                        title={tool.name}
                        categories={tool.categories}
                        description={tool.description}
                        maxDescriptionLength={maxDescriptionLength}
                    />
                ))}
            </div>

        </div>
    );
}

export default CategoryPage;

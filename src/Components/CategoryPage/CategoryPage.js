import React from 'react';
import { useLocation } from 'react-router-dom';

import ToolCard from '../ToolCard/ToolCard';
import useMaxDescriptionLength from '../Commons/useMaxDescriptionLength';
function CategoryPage({ placeholderToolData }) {
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
            <div>
                {filteredTools.map((tool, index) => (
                    <ToolCard
                        key={index}
                        title={tool.title}
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

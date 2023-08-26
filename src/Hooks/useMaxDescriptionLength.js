import { useEffect, useState } from 'react';

function useMaxDescriptionLength(toolData) {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(50); // Default value

  useEffect(() => {
    // Filter out tools with empty descriptions and then calculate the shortest description length
    const validDescriptions = toolData.filter(tool => tool.description);
    const shortestDescriptionLength = Math.min(
      ...validDescriptions.map(tool => tool.description.length)
    );
    // Set the maxDescriptionLength based on the shortest description
    setMaxDescriptionLength((maxDescriptionLength) => {
      return isFinite(shortestDescriptionLength)
        ? shortestDescriptionLength
        : maxDescriptionLength
    })
  }, [toolData]);

return maxDescriptionLength;
}

export default useMaxDescriptionLength;

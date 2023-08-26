import { useEffect, useState } from 'react';

function useMaxDescriptionLength(toolData) {
  const [maxDescriptionLength, setMaxDescriptionLength] = useState(100); // Default value

  useEffect(() => {
    // Calculate the shortest description length
    const shortestDescriptionLength = Math.min(
      ...toolData.map(tool => tool.description.length)
    );

    // Set the maxDescriptionLength based on the shortest description
    setMaxDescriptionLength(shortestDescriptionLength);
  }, [toolData]);

  return maxDescriptionLength;
}

export default useMaxDescriptionLength;

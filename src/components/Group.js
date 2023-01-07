import React, { useState } from "react";
import TextGroup from "/src/components/TextGroup";
import { v4 } from "uuid";

const Group = ({ initialArray, limit }) => {
  const [results, setResults] = useState([]);
  for (let i = 0; i < initialArray.length; i = i + limit) {
    results.push({
      isActive: true,
      theArray: initialArray.slice(i, i + limit)
    });
  }

  return results.map((result, i) => {
    return (
      <tr key={v4()}>
        <TextGroup group={result.theArray} row={i} />
      </tr>
    );
  });
};

export default React.memo(Group);

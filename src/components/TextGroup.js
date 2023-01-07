import React from "react";
import { v4 } from "uuid";

const TextGroup = ({ group, row }) => {
  return group.map((g, i) => {
    return (
      <td
        key={v4()}
        className={i > 0 ? "question-object" : `table-start-${row}`}
        row={row}
        column={i}
      >
        {g}
      </td>
    );
  });
};

export default React.memo(TextGroup);

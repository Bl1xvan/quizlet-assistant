import { v4 } from "uuid";

const HeaderNumber = ({ limitsansone }) => {
  let results = [];
  for (let i = 0; i <= limitsansone; i++) {
    results.push("dummy-header");
  }
  return results.map((header, i) => {
    const indexplus = i + 1;
    return (
      <th key={v4()} className={`${header}-${indexplus}`}>
        H{indexplus}
      </th>
    );
  });
};

export default HeaderNumber;

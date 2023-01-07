import { v4 } from "uuid";
import HeaderNumber from "/src/components/HeaderNumber";

const TextHeader = ({ limitsansone }) => {
  return (
    <tr key={v4()}>
      <th>header</th>
      <HeaderNumber limitsansone={limitsansone} />
    </tr>
  );
};

export default TextHeader;

import TextHeader from "./TextHeader";
import Group from "./Group";

const MainTable = ({ limit, initialArray }) => {
  return (
    <div id="table-overflow">
      <table id="main-table">
        <tbody>
          <TextHeader limitsansone={limit - 2} />
          <Group initialArray={initialArray} limit={limit} />
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;

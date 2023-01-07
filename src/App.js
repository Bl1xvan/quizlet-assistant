import { useSelector } from "react-redux";
import ReduxControls from "/src/components/ReduxControls";
import MainTable from "/src/components/MainTable";
import { v4 } from "uuid";
import "./styles.css";
import "./color.css";

export default function App() {
  const initialArray = useSelector((state) => state.initialArray);
  const limit = useSelector((state) => state.limit);
  let texttocopy = document.getElementById("text-to-copy");
  const theString = (e) => {
    let column = e.attributes[2].textContent;
    let row = e.attributes[1].textContent;
    let starter = document.querySelector(`.table-start-${row}`).innerText;
    let dummy = document.querySelector(`.dummy-header-${column}`).innerText;
    texttocopy.value += `${starter}\t${e.innerText} ${dummy} \n`;
  };
  const makeString = () => {
    Array.from(document.querySelectorAll(".question-object"), theString);
  };
  return (
    <div id="container">
      <ReduxControls />
      <MainTable key={v4()} initialArray={initialArray} limit={limit} />
      <button type="button" onClick={makeString}>
        Make String
      </button>
      <textarea id="text-to-copy" />
    </div>
  );
}

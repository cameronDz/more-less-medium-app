import { useEffect, useState } from "react";

const copyStart = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const copyEnd= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const ToggleButton = ({ isExpanded, onClick }) => {
  return (
    <button className="btn-toggle" onClick={onClick}>
      {isExpanded ? "Show Less" : "Show More"}
    </button>
  );
};

const App = ({ isLongCopy = true }) => {
  const text = `${copyStart} ${isLongCopy ? copyEnd : ""}`;
  const [heightMin, setHeightMin] = useState(72);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".text-display")
    const heightClient = element?.clientHeight || 0;
    const scrollClient = element?.scrollHeight || 0;
    if (heightClient !== scrollClient) {
      setIsOverflow(true);
    }
  }, [text]);

  const handleClickBtn = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className="root">
      <div className="text-display" style={{ height: `${heightMin}px` }}>
        {text}
      </div>
      {isOverflow && <ToggleButton isExpanded={isExpanded} onClick={handleClickBtn}/>}
    </div>
  );
};

export default App;

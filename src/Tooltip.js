import React, { useState } from "react";

const TooltipContainer = ({ text, children, position }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && <div className={position}>{text}</div>}
      {children}
    </div>
  );
};

const Tooltip = () => {
  const [position, setPosition] = useState("Left");
  const handleClick = (e) => {
    setPosition(e.target.value);
  };

  return (
    <>
      <div>
        <TooltipContainer position={position} text={`I Am ${position} ToolTip`}>
          <button className="btn">Hover On Me</button>
        </TooltipContainer>
        <br />
        <br />
        <div className="divBtn">
          <button onClick={handleClick} value="Left">
            LEFT
          </button>
          <button onClick={handleClick} value="Right">
            RIGHT
          </button>
          <button onClick={handleClick} value="Top">
            TOP
          </button>
          <button onClick={handleClick} value="Bottom">
            BOTTOM
          </button>
        </div>
      </div>
    </>
  );
};

export default Tooltip;

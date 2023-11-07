import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ list }) => {
  const genRandomIdx = () => Math.floor(Math.random() * list.length);
  const nextAnswer = () => {
    let i = genRandomIdx();
    setColor(list[i].color);
    setAnswer(list[i].msg);
    console.log(i);
  };
  const [color, setColor] = useState("black");
  const [answer, setAnswer] = useState("Think of a Question");

  return (
    <div
      className="EightBall-circle"
      style={{ backgroundColor: color }}
      onClick={nextAnswer}>
      <div className="EightBall-container">
        <p className="EightBall-title">{answer}</p>
      </div>
    </div>
  );
};

export default EightBall;

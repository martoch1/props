import React from "react";
import Player2 from "../../Components/Player2/Player2";
import Player1 from "../../Components/Player1/Player1";

const PlayerList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Player1.map((Player2, index) => (
        <Player2 key={index} {...Player2} />
      ))}
    </div>
  );
};

export default PlayerList;

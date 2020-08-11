import "./board.css";
import React, { useCallback } from "react";
import Square from "./Square";
import { calculateWinner } from "../api/calcWinner";

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [isMonkyEarsNext, setisMonkyEarsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let winnerPlayer;
  if (winner) {
    winnerPlayer = "Winner:" + winner;
  } else {
    winnerPlayer = isMonkyEarsNext ? "Next player:🙉" : "Next player:🙈";
  }

  const status = isMonkyEarsNext ? "Next player:🙉" : "Next player:🙈";
  const handleClick = (index) => {
    const square = squares.slice();
    if (calculateWinner(square) || square[index]) {
      return;
    }
    square[index] = isMonkyEarsNext ? "🙉" : "🙈";
    setSquares(square);
    setisMonkyEarsNext(!isMonkyEarsNext);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

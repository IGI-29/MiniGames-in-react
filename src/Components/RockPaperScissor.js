import React from "react";
import rock from "./rock.png";
import scissor from "./scissor.png";
import paper from "./paper.png";
import rockrotated from "./rockrotated.png";
import scissorrotated from "./scissorrotated.png";
import paperrotated from "./paperrotated.png";

function RockPaperScissor() {
  const random1 = (e) => {
    e.preventDefault();

    var img = document.getElementById("img1");
    var value1 = 0;
    var count2 = 0;
    const myInterval = setInterval(function myTimer1() {
      count2++;
      const rd1 = Math.floor(Math.random() * 3);

      if (rd1 == 1) img.src = paper;
      else if (rd1 == 2) img.src = rock;
      else img.src = scissor;

      if (count2 > 10) {
        value1 = rd1;
        clearInterval(myInterval);
      }
    }, 50);

    var img2 = document.getElementById("img2");
    var count = 0;
    var value2 = 0;
    const myInterval1 = setInterval(function myTimer() {
      count++;
      const rd2 = Math.floor(Math.random() * 3);

      if (rd2 == 2) img2.src = paperrotated;
      else if (rd2 == 1) img2.src = scissorrotated;
      else img2.src = rockrotated;

      if (count > 10) {
        value2 = rd2;
        clearInterval(myInterval1);
      }
    }, 50);

    setTimeout(function displayresult() {
      var str = "";

      if (
        (value1 == 1 && value2 == 2) ||
        (value1 == 2 && value2 == 0) ||
        (value1 == 0 && value2 == 1)
      )
        str = "It's Tie!";
      else if (
        (value1 == 1 && value2 == 1) ||
        (value1 == 2 && value2 == 2) ||
        (value1 == 0 && value2 == 0)
      )
        str = "Player 2 Won!";
      else str = "Player 1 Won!";

      document.getElementById("win").textContent = str;
    }, 700);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Rock Paper Scissor Game</h1>
      <div className="row d-flex">
        <div className="col-5 mx-auto">
          <img
            id="img1"
            src={rock}
            className="my-5"
            style={{ width: "500px", height: "350px" }}
            alt="rock"
          />
          <div className="d-flex">
            <h3 className="mx-auto">
              <span className="badge rounded-pill bg-primary text-center">
                Player 1
              </span>
            </h3>
          </div>
        </div>
        <div className="col-2 my-auto text-center">
          <button
            type="button"
            className="btn btn-success btn-lg"
            onClick={random1}
          >
            <b>Play</b>
          </button>
        </div>
        <div className="col-5 mx-auto">
          <img
            id="img2"
            src={rockrotated}
            className="my-5"
            style={{ width: "500px", height: "350px" }}
            alt="rock"
          />
          <div className="d-flex">
            <h3 className="mx-auto">
              <span className="badge rounded-pill bg-primary">Player 2</span>
            </h3>
          </div>
        </div>
      </div>
      <h2 className="text-center">
        <span className="badge bg-warning" id="win"></span>
      </h2>
    </div>
  );
}

export default RockPaperScissor;

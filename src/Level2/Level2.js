import React, { useState } from "react";

import { mergeSortingAlgo } from "../MergeSort";
import "./Level2.css";
import Steps2 from "./Steps2";
import ToolTip from "react-tooltip";
import infoLogo from "../Images/index.png";
import Timer from "react-compound-timer";

const Level2 = (props) => {
  const [sort, setSort] = useState([]);
  const [unsort, setUnSort] = useState([]);
  const [branch, setBranch] = useState([]);
  const [generate, setGenerate] = useState(false);
  const [toggleStep, setStep] = useState(true);

  function startSort() {
    let nums = [];

    for (let i = 0; i < 10; i++) {
      nums.push(Math.floor(Math.random() * 20));
    }

    setUnSort([...nums]);

    let info = mergeSortingAlgo(nums);
    setBranch(info[1]);

    setSort(info[0]);
  }

  function resetGenerate() {
    setGenerate(false);
    setSort([]);
    setUnSort([]);
    setStep(true);
    props.goToNext(3);
  }

  function intitiate() {
    startSort();
    setGenerate(true);
    setStep(false);
  }

  function levelSelect(select) {
    props.goToNext(select);
  }

  return (
    <div className="level-container">
      <div className="header">
        <div>Level 2</div>
        <button
          onClick={() => {
            intitiate();
          }}
          disabled={generate}
        >
          Generate Numbers
        </button>
      </div>

      <div className="array-container">
        <div className="array-layout">
          <div className="array-nums">
            {unsort.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                >
                  {" "}
                  {element}{" "}
                </div>
              );
            })}
          </div>
        </div>

        <div className="array-layout">
          <div className="array-nums">
            {sort.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                >
                  {" "}
                  {element}{" "}
                </div>
              );
            })}
          </div>
        </div>

        <div className="array-layout">
          <Timer
            initialTime={0}
            direction="forward"
            checkpoints={[
              {
                time: 300000,
                callback: () => {
                  props.goToNext(0);
                },
              },
            ]}
          >
            {
              <React.Fragment>
                <div style={{ marginRight: ".5rem" }}>Timer </div>

                <Timer.Minutes />
                <div>:</div>
                <Timer.Seconds />
              </React.Fragment>
            }
          </Timer>
        </div>
      </div>
      <Steps2
        contents={branch}
        toggle={toggleStep}
        resetGen={resetGenerate}
        lvlSelect={levelSelect}
      ></Steps2>
    </div>
  );
};

export default Level2;

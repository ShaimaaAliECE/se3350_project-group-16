import React, { useState } from "react";

import { mergeSortingAlgo } from "../MergeSort";
import "./Level1.css";
import Steps from "./Steps";
import ToolTip from "react-tooltip";
import infoLogo from "../Images/index.png";
import Timer from "react-compound-timer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Level1 = (props) => {
  const [sort, setSort] = useState([]);
  const [unsort, setUnSort] = useState([]);
  const [branch, setBranch] = useState([]);
  const [generate, setGenerate] = useState(true);
  const [toggleStep, setStep] = useState(true);
  const [menuSel, setMenu] = useState(false);

  let currentTime = "";

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
    props.recordTime(currentTime);
    props.goToNext(2);
  }

  function intitiate() {
    startSort();
    setGenerate(true);
    setStep(false);
  }

  function levelSelect(select) {
    props.goToNext(select);
  }

  function loadTime(time) {
    localStorage.setItem("1", JSON.stringify(time));
    currentTime = time;
  }

  function menu(selection) {
    console.log(selection);
    if (selection.value == "Merge Sort") {
      setMenu(true);
      setGenerate(false);
    }
  }

  return (
    <div className="level-container">
      <div className="header">
        <div className="level-info">
          <div>Level 1</div>
          <img
            src={infoLogo}
            className="info-icon"
            data-tip="Level 1: Click Generate Numbers to get started. Click Next Step to advance"
            data-place="right"
          ></img>
          <ToolTip />
        </div>

        <div style={{ flexDirection: "column", justifyContent: "center" }}>
          <Dropdown
            options={["Merge Sort", "Bubble Sort", "Selection Sort"]}
            onChange={menu}
            placeholder="Select an Algorithm"
            disabled={menuSel}
          />
        </div>

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
            {({ getTime }) => (
              <React.Fragment>
                <div style={{ marginRight: ".5rem" }}>Timer </div>

                <Timer.Minutes />
                <div>:</div>
                <div>{loadTime(getTime())}</div>
                <Timer.Seconds />
              </React.Fragment>
            )}
          </Timer>
        </div>
      </div>
      <Steps
        contents={branch}
        toggle={toggleStep}
        resetGen={resetGenerate}
      ></Steps>
    </div>
  );
};

export default Level1;

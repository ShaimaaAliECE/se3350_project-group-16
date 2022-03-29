import React, { useState, useRef } from "react";

import { mergeSortingAlgo } from "../MergeSort";
import "./Level3.css";
import Steps3 from "./Steps3";
import ToolTip from "react-tooltip";
import infoLogo from "../Images/index.png";
import Timer from "react-compound-timer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Level3 = (props) => {
  const [sort, setSort] = useState([]);
  const [unsort, setUnSort] = useState([]);
  const [branch, setBranch] = useState([]);
  const [generate, setGenerate] = useState(true);
  const [toggleStep, setStep] = useState(true);
  const [menuSel, setMenu] = useState(false);
  const timerRef = useRef(null);

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
    props.goToNext(1);
  }

  function restartLevel() {
    setGenerate(false);
    setSort([]);
    setUnSort([]);
    setBranch([]);
    setStep(true);
    setGenerate(true);
    setMenu(false);
    timerRef.current.reset();
  }

  function intitiate() {
    startSort();
    setGenerate(true);
    setStep(false);
  }

  function levelSelect(select) {
    props.goToNext(select);
  }

  function getTimeFormat(time) {
    let minutes = time / 60000;
    let seconds = (time % 60000) / 1000;

    return `${parseInt(minutes)}:${parseInt(seconds)}`;
  }

  function loadTime(time) {
    localStorage.setItem("3", JSON.stringify(time));
    currentTime = time;
  }

  function menu(selection) {
    if (selection.value == "Merge Sort") {
      setMenu(true);
      setGenerate(false);
    }
  }

  return (
    <div className="level-container">
      <div className="header">
        <div className="level-info">
          <div className="level-info">
            <div>Level 3</div>
            <img
              src={infoLogo}
              className="info-icon"
              data-tip="Level 3: Now let's see if you can do it without any pointers. Parameters of execution and data are the same"
              data-place="right"
            ></img>
            <ToolTip />
          </div>

          <img
            src={infoLogo}
            className="info-icon"
            data-tip="Level 3: Complete each step correctly to move on"
            data-place="right"
          ></img>
          <ToolTip />
        </div>
        <div>
          Time Spent on Level2{" "}
          {getTimeFormat(JSON.parse(localStorage.getItem("2")))}
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
            ref={timerRef}
            checkpoints={[
              {
                time: 300000,
                callback: () => {
                  props.goToNext(0);
                },
              },
            ]}
          >
            {({ getTime }) => {
              return (
                <React.Fragment>
                  <div style={{ marginRight: ".5rem" }}>Timer </div>

                  <Timer.Minutes />
                  <div>:</div>
                  <div>{loadTime(getTime())}</div>

                  <Timer.Seconds />
                </React.Fragment>
              );
            }}
          </Timer>
        </div>
      </div>
      <Steps3
        contents={branch}
        toggle={toggleStep}
        resetGen={resetGenerate}
        lvlSelect={levelSelect}
        resetLevel={restartLevel}
      ></Steps3>
    </div>
  );
};

export default Level3;

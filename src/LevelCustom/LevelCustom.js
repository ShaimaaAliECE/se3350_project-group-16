import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import { mergeSortingAlgo } from "../MergeSort";
import "./LevelCustom.css";
import StepsCustom from "./StepsCustom";
import ToolTip from "react-tooltip";
import infoLogo from "../Images/index.png";
import Range from "rc-slider";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Timer from "react-compound-timer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

//const { createSliderWithTooltip } = Slider;
//const Range = createSliderWithTooltip(Slider.Range);

const LevelCustom = (props) => {
  const [sort, setSort] = useState([]);
  const [unsort, setUnSort] = useState([]);
  const [branch, setBranch] = useState([]);
  const [generate, setGenerate] = useState(false);
  const [toggleStep, setStep] = useState(true);
  const [value, setValue] = useState(5);
  const [range, setRange] = useState([10, 20]);
  const [menuSel, setMenu] = useState(false);
  const timerRef = useRef(null);

  let currentTime = "";

  function startSort() {
    let nums = [];

    for (let i = 0; i < value; i++) {
      let numRange = range[1] - range[0];
      nums.push(Math.floor(Math.random() * numRange) + range[0]);
    }

    setUnSort([...nums]);

    let info = mergeSortingAlgo(nums);
    setBranch(info[1]);

    setSort(info[0]);
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

  function resetGenerate() {
    setGenerate(false);
    setSort([]);
    setUnSort([]);
    setStep(true);
    props.recordTime(currentTime);
    props.goToNext(7);
  }

  function intitiate() {
    startSort();
    setGenerate(true);
    setStep(false);
  }

  function getTimeFormat(time) {
    let minutes = time / 60000;
    let seconds = (time % 60000) / 1000;

    return `${parseInt(minutes)}:${parseInt(seconds)}`;
  }

  function loadTime(time) {
    localStorage.setItem("custom", JSON.stringify(time));
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
            <div>Custom Level!</div>
            <img
              src={infoLogo}
              className="info-icon"
              data-tip="Custome Level: Your turn to specify what the data will look like, steps will the the same as Level 5"
              data-place="right"
            ></img>
            <ToolTip />
          </div>
          <div>
            Time Spent on Level5{" "}
            {getTimeFormat(JSON.parse(localStorage.getItem("5")))}
          </div>

          <div
            style={{ flexDirection: "column", justifyContent: "center" }}
          ></div>
          <img
            src={infoLogo}
            className="info-icon"
            data-tip="Custom Level: The data set size it up to you, select the correct steps for a merge sort"
            data-place="right"
          ></img>
          <ToolTip />
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

      <div
        style={{ marginLeft: "400px", marginRight: "400px" }}
        className="slider"
      >
        <Dropdown
          options={["Merge Sort", "Bubble Sort", "Selection Sort"]}
          onChange={menu}
          placeholder="Select an Algorithm"
          disabled={menuSel}
        />
        <div style={{}}>
          Please enter the number of values you would like to practice with:
        </div>
        <p>{value}</p>
        <Slider
          min={0}
          max={120}
          onChange={(val) => setValue(val)}
          railStyle={{
            height: 2,
          }}
          handleStyle={{
            height: 30,
            width: 30,
            marginLeft: -14,
            marginTop: -14,
            backgroundColor: "blue",
            border: 0,
          }}
          trackStyle={{
            background: "none",
          }}
        />
      </div>

      <div
        style={{ marginLeft: "400px", marginRight: "400px" }}
        className="slider"
      >
        <div style={{}}>
          Please select the range of the values that will be generated:
        </div>
        <p></p>
        <p>
          {" "}
          minimum value possible: {range[0]} Maximum value possible: {range[1]}
        </p>
        <p></p>
        <Slider
          range={true}
          min={2}
          max={200}
          defaultValue={[2, 10]}
          onChange={(val) => setRange(val)}
          railStyle={{
            height: 2,
          }}
          handleStyle={{
            height: 30,
            width: 30,
            marginLeft: -14,
            marginTop: -14,
            backgroundColor: "blue",
          }}
          trackStyle={{
            background: "none",
          }}
        />
      </div>

      <div className="array-container">
        <div className="array-layout">
          <div className="array-nums">
            {unsort.map((element, index) => {
              return (
                <div
                  key={index}
                  style={{ marginLeft: ".25rem", marginRight: ".25rem" }}
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
                  style={{ marginLeft: ".25rem", marginRight: ".25rem" }}
                >
                  {" "}
                  {element}{" "}
                </div>
              );
            })}
          </div>
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
      <StepsCustom
        contents={branch}
        toggle={toggleStep}
        resetGen={resetGenerate}
        resetLevel={restartLevel}
      ></StepsCustom>
    </div>
  );
};

export default LevelCustom;

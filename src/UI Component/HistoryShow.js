import React, { useState } from "react";
import AllHistory from "./AllHistory";
import HistorybyDate from "./HistorybyDate";
import HistorybyKeyword from "./HistorybyKeyword";
import "./style.css";

const HistoryShow = () => {
  let [showData, setShowData] = useState("all");
  let selectHandler = (e) => {
    console.log("click Selected");
    setShowData(e.target.value);
    console.log(showData);
  };

  return (
    <div className="container">
      <h2>Show User History</h2>
      <select
        onChange={selectHandler}
        style={{ padding: "10px 20px", color: "black", fontWeight: "bold" }}
      >
        <option value="all">Filter History</option>
        <option value="date">By Date</option>
        <option value="kyword">By Keyword</option>
      </select>
      <div className="show-data">
        {/* showing data according to keyword , this is conditional rendering */}

        {showData == "all" ? (
          <AllHistory />
        ) : showData == "date" ? (
          <HistorybyDate />
        ) : (
          <HistorybyKeyword />
        )}
      </div>
    </div>
  );
};

export default HistoryShow;

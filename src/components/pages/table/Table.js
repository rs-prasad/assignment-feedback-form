import { useEffect, useState } from "react";
import "./table.css";

const Table = () => {
  //hooks
  const [feedbackData, setFeedbackData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  //handlers
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "allRatings") setCurrentData(feedbackData);
    else {
      const newData = feedbackData.filter(
        (item) =>
          item.service == value ||
          item.beverage == value ||
          item.cleanness == value ||
          item.overall == value
      );
      setCurrentData(newData);
    }
  };
  //useEffect
  useEffect(() => {
    let feedbackArray = localStorage.getItem("feedbackArray") || "[]";
    feedbackArray = JSON.parse(feedbackArray);
    setFeedbackData(feedbackArray);
    setCurrentData(feedbackArray);
  }, []);
  return (
    <div className="table_container">
      <div className="table_container__header">
        <h2 className="header__heading">All Feedback</h2>
        <div className="header__filter_option">
          <span>Filter</span>
          <select
            name="rating"
            id="header__rating--select"
            onChange={(e) => handleChange(e)}
          >
            <option value="allRatings">All ratings</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Bad">bad</option>
          </select>
        </div>
      </div>
      <table className="table_container__feedback_table">
        <thead>
          <tr>
            <th>Form Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Services Rating</th>
            <th>Beverages Rating</th>
            <th>Cleanness Rating</th>
            <th>Overall Rating</th>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 &&
            currentData.map((item, index) => {
              const {
                name,
                phoneNumber,
                email,
                service,
                beverage,
                cleanness,
                overall,
              } = item;
              return (
                <tr key={index}>
                  <td>Aromatic bar</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td>{service}</td>
                  <td>{beverage}</td>
                  <td>{cleanness}</td>
                  <td>{overall}</td>
                  <td>{name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

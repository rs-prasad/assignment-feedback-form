import { useEffect, useState } from "react";
import "./table.css";

const Table = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    let feedbackArray = localStorage.getItem("feedbackArray");
    feedbackArray = JSON.parse(feedbackArray);
    setFeedbackData(feedbackArray);
  }, []);

  return (
    <div className="table_container">
      <h2 className="table_container__header">All Feedback</h2>
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
          {feedbackData.map((item, index) => {
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

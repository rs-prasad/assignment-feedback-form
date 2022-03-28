import "./form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInputs from "./FormInputs";

const Form = () => {
  //Hooks
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    beverage: "",
    cleanness: "",
    overall: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  //function
  const saveData = () => {
    let feedbackArray = JSON.parse(
      localStorage.getItem("feedbackArray") || "[]"
    );
    feedbackArray = [...feedbackArray, feedback];
    localStorage.setItem("feedbackArray", JSON.stringify(feedbackArray));
    setFeedback({
      name: "",
      email: "",
      phoneNumber: "",
      service: "",
      beverage: "",
      cleanness: "",
      overall: "",
    });
    console.log("let go");
    navigate("/greeting");
  };
  //handles
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFeedback({ ...feedback, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    const newErrorMessage = {
      name: "",
      email: "",
      phoneNumber: "",
      service: "",
      beverage: "",
      cleanness: "",
      overall: "",
    };

    let anyError = false;
    const regexName = /^[a-zA-Z\s]{1,}$/;
    const regexPhoneNumber = /^[0-9]{10}$/;
    const regexEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]{3,}.[a-zA-Z]{2,3}$/;

    if (!regexName.test(feedback.name)) {
      newErrorMessage.name =
        "Name fields should be valid and properly formatted.";
      anyError = true;
    }
    if (!regexEmail.test(feedback.email)) {
      newErrorMessage.email = "Email should be valid and properly formatted.";
      anyError = true;
    }

    if (!regexPhoneNumber.test(feedback.phoneNumber)) {
      newErrorMessage.phoneNumber =
        "Phone number fields should be valid and properly formatted.";
      anyError = true;
    }

    for (const key in feedback) {
      if (!feedback[key]) {
        newErrorMessage[key] = "All fields are mandatory";
        anyError = true;
      }
    }
    setError(newErrorMessage);
    if (!anyError) saveData();
  };

  return (
    <FormInputs
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      feedback={feedback}
    ></FormInputs>
  );
};

export default Form;

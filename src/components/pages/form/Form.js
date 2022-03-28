import "./form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const ratingOptions = ["Excellent", "Good", "Fair", "Bad"];
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
    <div className="form_container">
      <p className="form_container__form_heading">Aromatic Bar</p>
      <p className="form_container__description">
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you
      </p>
      {/* form */}
      <form
        action=""
        className="form_container__form"
        onSubmit={(e) => handleSubmit(e)}
      >
        {/* Personal details */}
        <div className="form__personal_details">
          <fieldset className="form__name">
            <label htmlFor="form__name__input" className="form__name__title">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="form__name__input"
              value={feedback.name}
              onChange={(e) => handleChange(e)}
            />
            {error.name && <p className="error__message">{error.name}</p>}
          </fieldset>
          <fieldset className="form__email">
            <label htmlFor="form__email__input" className="form__email__title">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="form__email__input"
              value={feedback.email}
              onChange={(e) => handleChange(e)}
            />
            {error.email && <p className="error__message">{error.email}</p>}
          </fieldset>
          <fieldset className="form__phone">
            <label htmlFor="form__phone__input" className="form__phone__title">
              Phone number
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="form__phone__input"
              placeholder="Don't include +91"
              value={feedback.phoneNumber}
              onChange={(e) => handleChange(e)}
            />
            {error.phoneNumber && (
              <p className="error__message">{error.phoneNumber}</p>
            )}
          </fieldset>
        </div>
        {/* Ratings */}
        <div className="form__ratings">
          <p className="form__ratings__header">Rate us:</p>
          {/* service */}
          <fieldset className="rating__service">
            <label htmlFor="service">
              Please rate the quality of the service you received from your
              host.
            </label>
            <div className="rating_options" onChange={(e) => handleChange(e)}>
              {ratingOptions.map((item, index) => (
                <span key={index}>
                  <input type="radio" name="service" id="" value={item} />
                  <span className="rating__title">{item}</span>
                </span>
              ))}
            </div>
            {error.service && <p className="error__message">{error.service}</p>}
          </fieldset>
          {/* beverage */}
          <fieldset className="rating__beverage">
            <label htmlFor="beverage">
              Please rate the quality of your beverage.
            </label>
            <div className="rating_options" onChange={(e) => handleChange(e)}>
              {ratingOptions.map((item, index) => (
                <span key={index}>
                  <input type="radio" name="beverage" id="" value={item} />
                  <span className="rating__title">{item}</span>
                </span>
              ))}
            </div>
            {error.beverage && (
              <p className="error__message">{error.beverage}</p>
            )}
          </fieldset>
          {/* cleanness */}
          <fieldset className="rating__cleanness">
            <label htmlFor="cleanness">Was our restaurant clean?</label>
            <div className="rating_options" onChange={(e) => handleChange(e)}>
              {ratingOptions.map((item, index) => (
                <span key={index}>
                  <input type="radio" name="cleanness" id="" value={item} />
                  <span className="rating__title">{item}</span>
                </span>
              ))}
            </div>
            {error.cleanness && (
              <p className="error__message">{error.cleanness}</p>
            )}
          </fieldset>
          {/* overall */}
          <fieldset className="rating__overall">
            <label htmlFor="overall">
              Please rate your overall dining experience.
            </label>
            <div className="rating_options" onChange={(e) => handleChange(e)}>
              {ratingOptions.map((item, index) => (
                <span key={index}>
                  <input type="radio" name="overall" id="" value={item} />
                  <span className="rating__title">{item}</span>
                </span>
              ))}
            </div>
            {error.overall && <p className="error__message">{error.overall}</p>}
          </fieldset>
        </div>
        <div className="submit_btn_container">
          <button type="submit" className="form__submit_btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

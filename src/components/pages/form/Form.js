import "./form.css";
import { useState } from "react";

const Form = () => {
  const ratingOptions = ["Excellent", "Good", "Fair", "Bad"];

  const [personalDetail, setPersonalDetail] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalDetail({ ...personalDetail, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document.forms[0]);
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
              value={personalDetail.name}
              onChange={(e) => handelChange(e)}
            />
          </fieldset>
          <fieldset className="form__email">
            <label htmlFor="form__email__input" className="form__email__title">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="form__email__input"
              value={personalDetail.email}
              onChange={(e) => handelChange(e)}
            />
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
              value={personalDetail.phoneNumber}
              onChange={(e) => handelChange(e)}
            />
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
            <div className="rating_options">
              {ratingOptions.map((item) => (
                <>
                  <input type="radio" name="service" id="" value={item} />
                  <span>{item}</span>
                </>
              ))}
            </div>
          </fieldset>
          {/* beverage */}
          <fieldset className="rating__beverage">
            <label htmlFor="beverage">
              Please rate the quality of your beverage.
            </label>
            <div className="rating_options">
              {ratingOptions.map((item) => (
                <>
                  <input type="radio" name="beverage" id="" value={item} />
                  <span>{item}</span>
                </>
              ))}
            </div>
          </fieldset>
          {/* cleanness */}
          <fieldset className="rating__cleanness">
            <label htmlFor="cleanness">Was our restaurant clean?</label>
            <div className="rating_options">
              {ratingOptions.map((item) => (
                <>
                  <input type="radio" name="cleanness" id="" value={item} />
                  <span>{item}</span>
                </>
              ))}
            </div>
          </fieldset>
          {/* overall */}
          <fieldset className="rating__overall">
            <label htmlFor="overall">
              Please rate your overall dining experience.
            </label>
            <div className="rating_options">
              {ratingOptions.map((item) => (
                <>
                  <input type="radio" name="overall" id="" value={item} />
                  <span>{item}</span>
                </>
              ))}
            </div>
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

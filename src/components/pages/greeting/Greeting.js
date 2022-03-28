import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./greeting.css";

const Greeting = () => {
  return (
    <section className="greeting_container">
      <section className="greeting">
        <div className="greeting__message">
          <GrStatusGood className="greeting__icon" size={200} />
          <p>Thank you for completing the information.</p>
        </div>
        <button className="greeting__button">
          <Link to="/">Back to feedback form</Link>
        </button>
      </section>
    </section>
  );
};

export default Greeting;

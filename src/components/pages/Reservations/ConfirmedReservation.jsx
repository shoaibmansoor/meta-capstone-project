import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConfirmedReservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, mail, date, time, numberOfGuests, occasion } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

  if (!location.state) {
    return null;
  }

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section
      className="container confirmed-reservation"
      aria-labelledby="confirmation-heading"
    >
      <FontAwesomeIcon
        icon={faCircleCheck}
        size="3x"
        color="#495E57"
        aria-hidden="true"
      />
      <h2 id="confirmation-heading">Your table has been reserved!</h2>
      <p>Your reservation details are confirmed below.</p>

      <div className="reservation-summary" role="region" aria-labelledby="summary-heading">
        <h3 id="summary-heading">Reservation Details</h3>
        <dl>
          <dt><strong>Name:</strong></dt>
          <dd>{name}</dd>

          <dt><strong>Email:</strong></dt>
          <dd>{mail}</dd>

          <dt><strong>Date:</strong></dt>
          <dd>{formatDate(date)}</dd>

          <dt><strong>Time:</strong></dt>
          <dd>{time}</dd>

          <dt><strong>Number of Guests:</strong></dt>
          <dd>{numberOfGuests}</dd>

          <dt><strong>Occasion:</strong></dt>
          <dd>{occasion}</dd>
        </dl>
      </div>

      <p className="confirmation-note">
        We look forward to serving you! If you need to make any changes,
        please contact us at <a href="tel:+15551234567">+1 (555) 123-4567</a>.
      </p>
    </section>
  );
};

export default ConfirmedReservation;

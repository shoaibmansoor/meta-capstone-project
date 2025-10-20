import React from "react";
import { Formik } from "formik";
import FormField from "./FormField";

const ReservationForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const today = new Date().toISOString().split("T")[0];
  const minGuests = 1;
  const maxGuests = 10;
  const occasionOptions = ["Birthday", "Anniversary", "Engagement", "Other"];

  return (
    <Formik
      initialValues={{
        name: "",
        mail: "",
        date: today,
        time: availableTimes[0],
        numberOfGuests: minGuests,
        occasion: occasionOptions[0],
      }}

      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Please enter your name";
        } else if (values.name.trim().length < 2) {
          errors.name = "Name must be at least 2 characters long";
        } else if (values.name.trim().length > 50) {
          errors.name = "Name must be less than 50 characters";
        } else if (!/^[a-zA-Z\s'-]+$/.test(values.name)) {
          errors.name = "Name can only contain letters, spaces, hyphens, and apostrophes";
        }

        if (!values.mail) {
          errors.mail = "Please enter an email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
          errors.mail = "Invalid email address";
        }

        if (!values.date) {
          errors.date = "Please choose a valid date";
        } else {
          const selectedDate = new Date(values.date);
          const todayDate = new Date(today);
          todayDate.setHours(0, 0, 0, 0);

          if (selectedDate < todayDate) {
            errors.date = "Date cannot be in the past";
          }

          const maxDate = new Date(todayDate);
          maxDate.setMonth(maxDate.getMonth() + 3);
          if (selectedDate > maxDate) {
            errors.date = "Reservations can only be made up to 3 months in advance";
          }
        }

        if (!values.time) {
          errors.time = "Please choose a valid time";
        }

        if (!values.numberOfGuests) {
          errors.numberOfGuests = `Please enter a number between ${minGuests} and ${maxGuests}`;
        } else if (values.numberOfGuests < minGuests || values.numberOfGuests > maxGuests) {
          errors.numberOfGuests = `Please enter a number between ${minGuests} and ${maxGuests}`;
        } else if (!Number.isInteger(Number(values.numberOfGuests))) {
          errors.numberOfGuests = "Number of guests must be a whole number";
        }

        if (!values.occasion) {
          errors.occasion = "Please choose a valid occasion";
        }

        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        submitData(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormField label="Name" htmlFor="reservation-name">
            <input
              type="text"
              name="name"
              id="reservation-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Enter your full name"
              aria-label="Full name"
              aria-required="true"
              aria-invalid={errors.name && touched.name ? "true" : "false"}
              aria-describedby={errors.name && touched.name ? "name-error" : undefined}
            />
            {errors.name && touched.name && (
              <div className="error" id="name-error" data-testid="error-message" role="alert" aria-live="polite">
                {errors.name}
              </div>
            )}
          </FormField>
          <FormField label="Email address" htmlFor="reservation-mail">
            <input
              type="email"
              name="mail"
              id="reservation-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mail}
              placeholder="your.email@example.com"
              aria-label="Email address"
              aria-required="true"
              aria-invalid={errors.mail && touched.mail ? "true" : "false"}
              aria-describedby={errors.mail && touched.mail ? "mail-error" : undefined}
            />
            {errors.mail && touched.mail && (
              <div className="error" id="mail-error" data-testid="error-message" role="alert" aria-live="polite">
                {errors.mail}
              </div>
            )}
          </FormField>
          <FormField label="Date" htmlFor="reservation-date">
            <input
              type="date"
              name="date"
              id="reservation-date"
              min={today}
              onChange={(e) => {
                handleChange(e);
                dispatchOnDateChange(e.target.value);
              }}
              onBlur={handleBlur}
              value={values.date}
              aria-label="Reservation date"
              aria-required="true"
              aria-invalid={errors.date && touched.date ? "true" : "false"}
              aria-describedby={errors.date && touched.date ? "date-error" : undefined}
            />
            {errors.date && touched.date && (
              <div className="error" id="date-error" data-testid="error-message" role="alert" aria-live="polite">
                {errors.date}
              </div>
            )}
          </FormField>
          <FormField label="Time" htmlFor="reservation-time">
            <select
              name="time"
              id="reservation-time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
              aria-label="Select reservation time"
              aria-required="true"
              aria-invalid={errors.time && touched.time ? "true" : "false"}
              aria-describedby={errors.time && touched.time ? "time-error" : undefined}
            >
              {availableTimes.map((time) => (
                <option key={time} value={time} data-testid="reservation-time-option">
                  {time}
                </option>
              ))}
            </select>
            {errors.time && touched.time && (
              <div className="error" id="time-error" data-testid="error-message" role="alert" aria-live="polite">
                {errors.time}
              </div>
            )}
          </FormField>
          <FormField label="Number of guests" htmlFor="reservation-number-guests">
            <input
              type="number"
              name="numberOfGuests"
              id="reservation-number-guests"
              min={minGuests}
              max={maxGuests}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numberOfGuests}
              placeholder={`${minGuests}-${maxGuests} guests`}
              aria-label="Number of guests"
              aria-required="true"
              aria-invalid={errors.numberOfGuests && touched.numberOfGuests ? "true" : "false"}
              aria-describedby={errors.numberOfGuests && touched.numberOfGuests ? "guests-error" : undefined}
            />
            {errors.numberOfGuests && touched.numberOfGuests && (
              <div className="error" id="guests-error" data-testid="error-message" role="alert" aria-live="polite">
                {errors.numberOfGuests}
              </div>
            )}
          </FormField>
          <FormField label="Occasion" htmlFor="reservation-occasion">
            <select
              name="occasion"
              id="reservation-occasion"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.occasion}
              aria-label="Select occasion"
              aria-required="true"
              aria-invalid={errors.occasion && touched.occasion ? "true" : "false"}
              aria-describedby={errors.occasion && touched.occasion ? "occasion-error" : undefined}
            >
              {occasionOptions.map((occasion) => (
                <option key={occasion} value={occasion} data-testid="reservation-occasion-option">
                  {occasion}
                </option>
              ))}
            </select>
            {errors.occasion && touched.occasion && (
              <div className="error" id="occasion-error" data-testid="error-message" role="alert" aria-live="polite">
                {errors.occasion}
              </div>
            )}
          </FormField>
          <button
            aria-label="Submit reservation form"
            className="button-primary"
            type="submit"
            disabled={isSubmitting || Object.keys(errors).length > 0}
          >
            {isSubmitting ? "Submitting..." : "Reserve now!"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ReservationForm;
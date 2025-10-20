const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
  return (
    <div className="form-field">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? (
        <p data-testid="error-message" className="error" role="alert" aria-live="polite">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

export default FormField;

const FormField = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  placeholder = "",
  autoComplete = "off",
}) => {
  return (
    <label htmlFor={id} className="form-label">
      {label}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : null}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`form-input ${error ? "error" : ""}`}
      />
      {error && (
        <p id={`${id}-error`} className="error-msg" role="alert">
          {error}
        </p>
      )}
    </label>
  );
};

export default FormField;

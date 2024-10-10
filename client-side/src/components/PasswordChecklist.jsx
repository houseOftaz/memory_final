import { useState, useEffect } from "react";

const PasswordChecklist = ({ password, onValidationChange }) => {
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  useEffect(() => {
    const isValidLength = password.length >= 10;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+]/.test(password);

    setIsLengthValid(isValidLength);
    setHasUpperCase(hasUpper);
    setHasLowerCase(hasLower);
    setHasNumber(hasNumber);
    setHasSpecialChar(hasSpecialChar);

    const isValid =
      isValidLength && hasUpper && hasLower && hasNumber && hasSpecialChar;

    onValidationChange(isValid);
  }, [password, onValidationChange]);

  return (
    <div className="password-checklist">
      <ul>
        <li style={{ color: isLengthValid ? "green" : "red" }}>
          Au moins 10 caractères
        </li>
        <li style={{ color: hasUpperCase ? "green" : "red" }}>
          Une lettre majuscule
        </li>
        <li style={{ color: hasLowerCase ? "green" : "red" }}>
          Une lettre minuscule
        </li>
        <li style={{ color: hasNumber ? "green" : "red" }}>Un chiffre</li>
        <li style={{ color: hasSpecialChar ? "green" : "red" }}>
          Un caractère spécial
        </li>
      </ul>
    </div>
  );
};

export default PasswordChecklist;

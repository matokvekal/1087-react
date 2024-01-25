import React, { useState } from "react";

const RegexDemo = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    password: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    if (field === "password") setPassword(value);
    if (field === "email") setEmail(value);
    if (field === "phone") setPhone(value);
  };

  const validateField = (field, regex) => {
    return regex.test(field);
  };

  const handleValidation = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const emailValid = validateField(email, emailRegex);
    const phoneValid = validateField(phone, phoneRegex);
    const passwordValid = validateField(password, passwordRegex);

    setErrors({
      email: emailValid ? "" : "Invalid email format",
      phone: phoneValid ? "" : "Invalid phone format",
      password: passwordValid
        ? ""
        : "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.",
    });
  };

  const clearFields = () => {
    setEmail("");
    setPhone("");
    setPassword("");
    setErrors({
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Regex Validation Demo</h1>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => handleInputChange(e, "phone")}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <button onClick={handleValidation}>Validate</button>
        <button onClick={clearFields}>Clear</button>
      </div>
      <hr />

      <table>
        <tr>
          <th>Metacharacter</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>.</td>
          <td>Matches any character except a newline.</td>
        </tr>
        <tr>
          <td>\d</td>
          <td>Matches any digit (0-9).</td>
        </tr>
        <tr>
          <td>\w</td>
          <td>Matches any word character (alphanumeric and underscore).</td>
        </tr>
        <tr>
          <td>\s</td>
          <td>Matches any whitespace character (space, tab, newline, etc.).</td>
        </tr>
        <tr>
          <td>[abc]</td>
          <td>Matches any character in the set (a, b, or c).</td>
        </tr>
        <tr>
          <td>[^abc]</td>
          <td>Matches any character not in the set (not a, b, or c).</td>
        </tr>
        <tr>
          <td>^</td>
          <td>Matches the start of a string.</td>
        </tr>
        <tr>
          <td>$</td>
          <td>Matches the end of a string.</td>
        </tr>
        <tr>
          <td>*</td>
          <td>Matches the preceding element zero or more times.</td>
        </tr>
        <tr>
          <td>+</td>
          <td>Matches the preceding element one or more times.</td>
        </tr>
        <tr>
          <td>?</td>
          <td>Matches the preceding element zero or one time.</td>
        </tr>
        <tr>
          <td>(...)</td>
          <td>Capturing group for grouping and capturing a subexpression.</td>
        </tr>
        <tr>
          <td>|</td>
          <td>Alternation, matches one of multiple alternatives.</td>
        </tr>
      </table>
    </div>
  );
};

export default RegexDemo;

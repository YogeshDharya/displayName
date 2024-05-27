import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      // console.log(prevData);
      return({ ...prevData, [name]: value });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    // You can perform additional validation or submit the data to a server here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="theform">
          <p>First Name:</p>
          <input
            name="firstName"
            className="theinputs"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="theform">
          <p>Last Name:</p>
          <input
            name="lastName"
            className="theinputs"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {isFormSubmitted && (
        <p>Full Name: {`${formData.firstName} ${formData.lastName}`}</p>
      )}
    </>
  );
}

export default App;
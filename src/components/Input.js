import React from "react";

function Input(props) {
  const [formData, setFormData] = React.useState("")`   `;
  function handleSubmit(event) {
    event.preventDefault();
    props.setZipCode(formData);
  }

  function handleChange(event) {
    setFormData(event.target.value);
  }

  return (
    <div className="zip-code-input">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          name="zipCode"
          placeholder=""
          value={formData}
        />
        <button>Get Weather</button>
      </form>
    </div>
  );
}

export default Input;

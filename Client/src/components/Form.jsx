import { useState } from "react";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (b) => {
    // console.log(b)
    setName(b);
  };
  const handleEmailChange = (b) => {
    // console.log(b)
    setEmail(b);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("got pressed");

    axios
      .post("http://localhost:8000/register", {
        name,
        email,
      })
      .then((response) => {
        // handle success
        alert("check email for confirmation");
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  return (
    <form onsubmit={handleSubmit}>
      <div>
        <input
          style={{
            backgroundColor: "transparent",
            borderRadius: "45px",
            border: "2px solid gray",
            padding: "20px",
            textAlign: "center",
            fontSize: "18px",
            textColor: "white",
          }}
          value={name}
          type="text"
          name="name"
          placeholder="Enter Your name "
          onChange={(e) => handleNameChange(e.target.value)}
          autocomplete="off"
        />
      </div>
      <br />
      <div>
        <input
          style={{
            backgroundColor: "transparent",
            borderRadius: "45px",
            border: "2px solid gray",
            padding: "20px",
            textAlign: "center",
            fontSize: "18px",

            textColor: "white",
          }}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
      </div>
      <br />
      <button
        style={{
          backgroundColor: "transparent",
          borderRadius: "45px",
          border: "2px solid gray",
          padding: "20px",
          textAlign: "center",
          fontSize: "18px",
          textColor: "white",
          width: "100%",
        }}
        type="submit"
      >
        <h2 style={{ color: "white" }}>Submit </h2>
      </button>
    </form>
  );
}

export default Form;

import { useState } from "react";
import axios from 'axios';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (b) => {
    setName(b);
  };
  const handleEmailChange = (b) => {
    setEmail(b);
  };

  const SaveData = async () => {
    console.log("got pressed")
    console.log({ name, email });
    let data = {
      name: name,
      email: email,
    };

    axios.post("http://localhost:8000/register/data", data)
      .then((response) => {
        // handle success
        alert("check email for confirmation");
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
    // let result = await fetch("http://localhost:8000/register",
// {
// method: "POST",
// body:JSON.stringify(data),
// headers: {
// "Content-Type":"application/json",
// "Accept":"application/json"
// }
// }).then(history.push("/"))
// result = await result.json()
//   };

  return (
    <form>
      <div>
        <label>
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
        </label>
      </div>
      <br />
      <div>
        <label>
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
        </label>
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
        onClick={SaveData}
      >
        <h2 style={{ color: "white" }}>Submit </h2>
      </button>
    </form>
  );
}

export default Form;

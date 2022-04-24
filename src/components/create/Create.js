import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Create() {
  let naviGate = useNavigate();

  const [name, SetName] = useState("");
  const [last, SetLast] = useState("");
  const [gender, SetGender] = useState("");
  const [mobile, SetMobile] = useState("");
  const [add, SetAdd] = useState("");
  const [email, SetMail] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/posts", {
        name,
        last,
        gender,
        mobile,
        add,
        email,
      })
      .then(() => {
        naviGate.push("/read");
      });
      alert('You have added new employee Succesfully')

  };

  return (
    <div className="createed">
      <h1>Add New Employee</h1>
      <div class="ui form">
        <div class="fields">
          <div className="field">
            <label>First Name</label>
            <input
              onChange={(e) => SetName(e.target.value)}
              type="text"
              name="first-name"
              placeholder="First Name"
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              onChange={(e) => SetLast(e.target.value)}
              type="text"
              name="last-name"
              placeholder="Last Name"
            />
          </div>
          <div className="field">
            <label>Gender</label>
            <select
              onChange={(e) => SetGender(e.target.value)}
              className="ui fluid dropdown"
              name="Gender"
            >
              <option>Select</option>
              <option onChange={(e) => SetGender(e.target.value)} value="Male">
                Male
              </option>
              <option
                onChange={(e) => SetGender(e.target.value)}
                value="Female"
              >
                Female
              </option>
              <option
                onChange={(e) => SetGender(e.target.value)}
                value="Transgender"
              >
                Transgender
              </option>
            </select>
          </div>
          <div className="field">
            <label>Mobile Number</label>
            <input
              onChange={(e) => SetMobile(e.target.value)}
              type="number"
              placeholder="Mobile Number"
              name="Mobile_Number"
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              onChange={(e) => SetAdd(e.target.value)}
              type="text"
              placeholder="Address"
              name="address"
            />
          </div>
          <div className="field">
            <label>Email Id</label>
            <input
              onChange={(e) => SetMail(e.target.value)}
              type="text"
              placeholder="Email Id."
              name="Emial"
            />
          </div>
        </div>
        <div>   
          <Button color="green" onClick={sendData} className="ui button" type="submit">
            Submit
          </Button></div>
      </div>
    </div>
  );
}

export default Create;

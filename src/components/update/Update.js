import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Update() {
  let naviGate = useNavigate();
  const [name, SetName] = useState("");
  const [last, SetLast] = useState("");
  const [gender, SetGender] = useState("");
  const [mobile, SetMobile] = useState("");
  const [add, SetAdd] = useState("");
  const [email, SetMail] = useState("");
  const [ID, setId] = useState(null);
  const sendData = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/posts/${ID}`, {
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
    alert("data has been changed");
  };

  useEffect(() => {
    SetName(localStorage.getItem("name"));
    SetLast(localStorage.getItem("last"));
    SetGender(localStorage.getItem("gender"));
    SetMobile(localStorage.getItem("mobile"));
    SetAdd(localStorage.getItem("add"));
    SetMail(localStorage.getItem("email"));
    setId(localStorage.getItem("ID"));
  }, []);

  return (
    <>
      
      <div>
        <h1>Update</h1>
        <div class="ui form">
          <div class="fields">
            <div className="field">
              <label>First Name</label>
              <input
                value={name}
                onChange={(e) => SetName(e.target.value)}
                type="text"
                name="first-name"
                placeholder="First Name"
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                value={last}
                onChange={(e) => SetLast(e.target.value)}
                type="text"
                name="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="field">
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => SetGender(e.target.value)}
                className="ui fluid dropdown"
                name="Gender"
              >
                <option>Select</option>
                <option
                  onChange={(e) => SetGender(e.target.value)}
                  value="Male"
                >
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
                value={mobile}
                onChange={(e) => SetMobile(e.target.value)}
                type="number"
                placeholder="Mobile Number"
                name="Mobile_Number"
              />
            </div>
            <div className="field">
              <label>Address</label>
              <input
                value={add}
                onChange={(e) => SetAdd(e.target.value)}
                type="text"
                placeholder="Address"
                name="address"
              />
            </div>
            <div className="field">
              <label>Email Id</label>
              <input
                value={email}
                onChange={(e) => SetMail(e.target.value)}
                type="text"
                placeholder="Email Id."
                name="Emial"
              />
            </div>
          
          </div>
          <div>
          <Button color="green" onClick={sendData} className="ui button" type="submit">
              Update
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;

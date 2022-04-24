import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Read() {
  const [getset, setGet] = useState([]);

  useEffect((e) => {
    axios.get("http://localhost:3000/posts").then((getData) => {
      setGet(getData.data);
    });
  });

  const setId = (id) => {
    console.log(id);
    localStorage.setItem("ID", id);
  };

  const getData = () => {
    axios.get("http://localhost:3000/posts").then((getData) => {
      setGet(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      getData();
    
    });
  };

  return (
    <div className="readeed">
      <table class="ui table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {getset.map((data) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.last}</td>
                <td>{data.gender}</td>
                <td>{data.mobile}</td>
                <td>{data.add}</td>
                <td>{data.email}</td>
                <td>
                  <Link to="/Update">
                    <Button onClick={() => setId(data.id)} color="green">
                      Update
                    </Button>
                  </Link>
                  <Button onClick={() => onDelete(data.id)} color="red">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Read;

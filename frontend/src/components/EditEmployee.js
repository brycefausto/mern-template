import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [jobPosition, setJobPosition] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getById();
  }, []);

  const getById = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/employees/${id}`);
      setName(data.name);
      setEmail(data.email);
      setGender(data.gender);
      setJobPosition(data.jobPosition);
    } catch (error) {
      console.log(error);
    }
  };

  const save = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/employees/${id}`, {
        name,
        email,
        gender,
        jobPosition,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={save}>
      <div className="mb-3">
        <label htmlFor="input1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="input1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="input2" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="input2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="input3" className="form-label">
          Gender
        </label>
        <select
          id="input3"
          className="form-select"
          aria-label="Default select example"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="input4" className="form-label">
          Job Position
        </label>
        <input
          type="text"
          className="form-control"
          id="input4"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default EditEmployee;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
 
  useEffect(() => {
    getEmployees();
  }, []);
 
  const getEmployees = async () => {
    const response = await axios.get("http://localhost:5000/employees");
    setEmployees(response.data);
  };
 
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`);
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="mt-5">
      <div style={{ width: "50%" }}>
        <Link to="add" className="btn btn-success">
          Add New
        </Link>
        <table className="table table-primary table-striped mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Job Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                <td>{employee.jobPosition}</td>
                <td>
                  <Link
                    to={`edit/${employee._id}`}
                    className="btn btn-info btn-sm mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteEmployee(employee._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default EmployeeList;
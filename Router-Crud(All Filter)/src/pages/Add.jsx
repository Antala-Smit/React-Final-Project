import React, { useState } from 'react';
import Header from '../components/Header';
import './Add.css';

const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [degignation, setDegignation] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 10000),
      name,
      email,
      city,
      degignation,
      password,
      salary,
      status,
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(obj);
    localStorage.setItem('users', JSON.stringify(users));
    setName("");
    setEmail("");
    setCity("");
    setDegignation("");
    setPassword("");
    setSalary("");
    setStatus("");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="add">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="form-row">
                    <div className="col-4">
                      <label htmlFor="firstname" className="form-label">Name</label>
                      <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" placeholder='Enter Your Name' />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-4">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder='Enter Your Email Address' />
                    </div>
                    <div className="col-4">
                      <label htmlFor="number" className="form-label">Password</label>
                      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-4">
                      <div className="form-col d-flex justify-content-between align-items-center">
                        <div className="col-md-7 mb-2">
                          <label htmlFor="validationCustom02" className='mb-2'>Designation </label>
                          <input type="text" className="form-control" placeholder="Enter Your Designation" onChange={(e) => setDegignation(e.target.value)} value={degignation} />
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" onChange={(e) => setCity(e.target.value)} value={city} className="form-control" placeholder='Enter Your City' />

                      <label htmlFor="salary" className="form-label">Salary</label>
                      <input type="text" onChange={(e) => setSalary(e.target.value)} value={salary} className="form-control" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-2">
                      <label htmlFor="status" className="form-label">Select Job Status</label>
                      <select name="status" onChange={(e) => setStatus(e.target.value)} value={status} className="form-control" style={{ width: "200px" }}>
                        <option value="select">---Select Status---</option>
                        <option value="Active">Active</option>
                        <option value="Deactive">Deactive</option>
                      </select>
                    </div>
                  </div>

                  <div className='button-container'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;

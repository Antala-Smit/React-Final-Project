import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './Add.css';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [degignation, setDegignation] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  let data = JSON.parse(localStorage.getItem('users')) || [];
  const [record, setRecord] = useState(data);

  useEffect(() => {
    setName(location.state.name);
    setEmail(location.state.email);
    setPassword(location.state.password);
    setCity(location.state.city);
    setDegignation(location.state.degignation);
    setSalary(location.state.salary);
    setStatus(location.state.status);
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedRecords = record.map((val) => {
      if (val.id === location.state.id) {
        val.name = name;
        val.email = email;
        val.password = password;
        val.degignation = degignation;
        val.salary = salary;
        val.status = status;
      }
      return val;
    });

    localStorage.setItem('users', JSON.stringify(updatedRecords));
    setTimeout(() => {
      navigate('/');
    }, []);
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
                      <label htmlFor="city" className="form-label">City</label>
                      <input type="text" onChange={(e) => setCity(e.target.value)} value={city} className="form-control" placeholder='Enter Your City' />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-4">
                      <label htmlFor="degignation" className="form-label">Designation</label>
                      <input type="text" className="form-control" placeholder="Enter Your Designation" onChange={(e) => setDegignation(e.target.value)} value={degignation} />
                    </div>
                    <div className="col-2">
                      <label htmlFor="number" className="form-label">Password</label>
                      <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" />
                    </div>
                    <div className="col-2">
                      <label htmlFor="salary" className="form-label">Salary</label>
                      <input type="text" onChange={(e) => setSalary(e.target.value)} value={salary} className="form-control" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-4">
                      <label htmlFor="status" className="form-label">Status</label>
                      <select onChange={(e) => setStatus(e.target.value)} value={status} className="form-control">
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

export default Edit;

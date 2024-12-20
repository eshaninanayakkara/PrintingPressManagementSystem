import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import EmployeeLayout from "../../Layouts/EmployeeLayout";

const UpdateLeaves = () => {
  const { id } = useParams();
  // const [eid, setEID] = useState("6611372747da37caca75bd6a");
  const [reason, setReason] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setLeaveType] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/employeeLeave/getLeave/" + id)
      .then((result) => {
        console.log(result);
        // setEID(result.data.fname);
        setReason(result.data.reason);

        // Format the date values to YYYY-MM-DD format
        const fromDate = new Date(result.data.from).toISOString().substr(0, 10);
        const toDate = new Date(result.data.to).toISOString().substr(0, 10);

        setFrom(fromDate);
        setTo(toDate);

        setLeaveType(result.data.type);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    // if (!name) {
    //   errors.name = "Name is required";
    // }
    if (!reason) {
      errors.reason = "Reason is required";
    }
    if (!from) {
      errors.from = "From date is required";
    }
    if (!to) {
      errors.to = "To date is required";
    }
    if (!type) {
      errors.type = "Leave type is required";
    }

    if (Object.keys(errors).length === 0) {
      axios
        .put("http://localhost:5000/employeeLeave/updateLeave/" + id, {
          reason,
          from,
          to,
          type,
        })
        .then((result) => {
          console.log(result);
          navigate("/employee/leaves");
        })
        .catch((err) => console.log(err));
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <EmployeeLayout>
        <div className="bg-white p-3 mt-2">
          <div>
            <form onSubmit={handleSubmit}>
              {/* <div className="mb-3">
                <input
                  type="hidden"
                  className={`form-contro`}
                  id="name"
                  value={id}
                  required
                  onChange={(e) => setEID(e.target.value)}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div> */}
              <div className="mb-3">
                <label htmlFor="rsn" className="form-label">
                  Reason
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.reason && "is-invalid"}`}
                  id="rsn"
                  required
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                {errors.reason && (
                  <div className="invalid-feedback">{errors.reason}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="from" className="form-label">
                  From
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.from && "is-invalid"}`}
                  id="from"
                  required
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
                {errors.from && (
                  <div className="invalid-feedback">{errors.from}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="to" className="form-label">
                  To
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.to && "is-invalid"}`}
                  id="to"
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                {errors.to && (
                  <div className="invalid-feedback">{errors.to}</div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Select Leave Type
                </label>
                <select
                  className={`form-select ${errors.type && "is-invalid"}`}
                  aria-label="Default select example"
                  id="leaveType"
                  required
                  value={type}
                  onChange={(e) => setLeaveType(e.target.value)}
                >
                  <option selected>Leave type</option>
                  <option value="Medical">Medical</option>
                  <option value="Personal">Personal</option>
                  <option value="Service">Service</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </EmployeeLayout>
    </>
  );
};

export default UpdateLeaves;

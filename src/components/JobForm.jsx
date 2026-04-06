import { useState } from "react";

function JobForm({ addJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !role) return;

    addJob({
      id: Date.now(),
      company,
      role,
      status,
    });

    setCompany("");
    setRole("");
    setStatus("Applied");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
      </select>
      <button type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
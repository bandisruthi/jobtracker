import { useState, useEffect } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("jobs"));
    if (data) setJobs(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };
  const updateJob = (updatedJob) => {
  setJobs(jobs.map(job => 
    job.id === updatedJob.id ? updatedJob : job
  ));
};

  return (
    <div className="container">
      <h1>Job Tracker</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} deleteJob={deleteJob} />
    </div>
  );
}

export default App;
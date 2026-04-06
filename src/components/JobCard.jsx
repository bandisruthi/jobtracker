function JobCard({ job, deleteJob }) {
  return (
    <div className="card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <span className={`status ${job.status.toLowerCase()}`}>
        {job.status}
      </span>

      <button onClick={() => deleteJob(job.id)}>Delete</button>
    </div>
  );
}

export default JobCard;
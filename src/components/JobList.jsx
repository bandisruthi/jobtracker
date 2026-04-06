import JobCard from "./JobCard";

function JobList({ jobs, deleteJob }) {
  const statuses = ["Applied", "Interview", "Rejected"];

  return (
    <div className="board">
      {statuses.map((status) => (
        <div key={status} className="column">
          <h2>{status}</h2>

          {jobs
            .filter((job) => job.status === status)
            .map((job) => (
              <JobCard
                key={job.id}
                job={job}
                deleteJob={deleteJob}
              />
            ))}
        </div>
      ))}
    </div>
  );
}

export default JobList;
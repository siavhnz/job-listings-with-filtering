import { useContext } from "react";
import { JobsContext } from "../../store/jobs-context";

const Tag = ({ title }) => {
  const jobsCtx = useContext(JobsContext);

  return (
    <button
      onClick={() => jobsCtx.addToFilter(title)}
      aria-label={`filter by ${title}`}
      className="flex items-center text-desaturated-dark-cyan bg-desaturated-dark-cyan bg-opacity-10 py-1 px-3 rounded-sm h-8"
    >
      <span className="h-5">{title}</span>
    </button>
  );
};

export default Tag;

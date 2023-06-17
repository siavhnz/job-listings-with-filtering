import { useContext } from "react";
import { JobsContext } from "../../store/jobs-context";
import Item from "./Item";

const List = () => {
  const jobsCtx = useContext(JobsContext);
  const jobs = jobsCtx.filteredList;
  return (
    <div className="flex flex-col gap-y-10 lg:gap-y-6 pb-20">
      {jobs.map((job) => {
        //new is reserved word in javascript so we use isNew instead
        const _props = { ...job, isNew: job.new };
        return <Item {..._props} key={_props.id} />;
      })}
    </div>
  );
};

export default List;

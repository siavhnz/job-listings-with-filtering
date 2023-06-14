import jobs from "../../data.json";
import Item from "./Item";

const List = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {jobs.map((job) => {
        //new is reserved word in javascript so we use isNew instead
        const _props = { ...job, isNew: job.new };
        return <Item {..._props} key={_props.id} />;
      })}
    </div>
  );
};

export default List;

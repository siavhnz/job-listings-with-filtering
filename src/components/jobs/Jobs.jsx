import { useState } from "react";
import FilterBox from "./FilterBox";
import List from "./List";

const Jobs = () => {
  const [filters, setFiltes] = useState(["Frontend", "CSS", "JavaScript"]);
  return (
    <div>
      <div className="bg-mobile-pattern mb-14 bg-cover h-[9.75rem]" />
      {filters.length > 0 && <FilterBox items={filters} />}
      <List />
    </div>
  );
};

export default Jobs;

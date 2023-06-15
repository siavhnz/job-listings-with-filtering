import { useState } from "react";
import FilterBox from "./FilterBox";
import List from "./List";

const Jobs = () => {
  return (
    <div>
      <div className="bg-mobile-pattern mb-14 bg-cover h-[9.75rem]" />
      <FilterBox />
      <List />
    </div>
  );
};

export default Jobs;

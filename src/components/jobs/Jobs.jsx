import { useState } from "react";
import FilterBox from "./FilterBox";
import List from "./List";

const Jobs = () => {
  return (
    <div>
      <div className="bg-mobile-pattern lg:bg-desktop-pattern lg:bg-desaturated-dark-cyan mb-14 lg:mb-[4.75rem] bg-cover h-[9.75rem]" />
      <FilterBox />
      <List />
    </div>
  );
};

export default Jobs;

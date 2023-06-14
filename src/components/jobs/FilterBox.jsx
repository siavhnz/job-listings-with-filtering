import Close from "../../assets/images/icon-remove.svg";

const FilterBox = ({ items }) => {
  return (
    <div className="flex items-center bg-white p-5 mx-6 rounded-lg mb-14 -mt-[5.75rem] font-league-spartan">
      <div className="flex-1 flex gap-x-4 gap-y-4 flex-wrap">
        {items.map((item) => {
          return (
            <div className="flex" key={item}>
              <div className="pl-2 pr-3 py-1 rounded-l-sm bg-desaturated-dark-cyan bg-opacity-10 text-desaturated-dark-cyan">
                {item}
              </div>
              <button
                aria-label={`remove ${item} filter`}
                className="px-2 py-1  rounded-r-sm bg-desaturated-dark-cyan"
              >
                <img src={Close} aria-hidden={true} focusable={false} />
              </button>
            </div>
          );
        })}
      </div>
      <button className="text-dark-grayish-cyan" aria-label="clear filters">
        Clear
      </button>
    </div>
  );
};

export default FilterBox;

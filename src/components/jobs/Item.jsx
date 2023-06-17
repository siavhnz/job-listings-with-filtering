import Tag from "./Tag";

const Item = (props) => {
  const {
    logo,
    company,
    featured,
    isNew,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = { ...props };

  const containerClass = featured
    ? `lg:flex items-center gap-x-6 relative bg-white mx-6 px-5 lg:px-9 pb-6 lg:py-7 font-league-spartan rounded-lg 1110:w-[1110px] 1110:mr-auto 1110:ml-auto shadow-sm shadow-dark-grayish-cyan border-l-4 border-l-desaturated-dark-cyan`
    : "lg:flex items-center gap-x-6 relative bg-white mx-6 px-5 lg:px-9 pb-6 lg:py-7 font-league-spartan rounded-lg 1110:w-[1110px] 1110:mr-auto 1110:ml-auto shadow-sm shadow-dark-grayish-cyan";

  return (
    <div className={containerClass}>
      <img
        className="absolute lg:position-unset left-5 -top-6 w-12 lg:w-[5.5rem]"
        src={logo}
        alt={company}
      />
      <div>
        <div className="flex pt-8 lg:pt-0 gap-x-2 items-start">
          <p className="text-desaturated-dark-cyan mr-4 lg:mr-3 self-center lg:text-lg">
            {company}
          </p>
          {isNew && (
            <div className="uppercase text-white bg-desaturated-dark-cyan self-center flex items-center h-6 px-2 rounded-3xl text-sm">
              <span className="h-4">new!</span>
            </div>
          )}
          {featured && (
            <div className="uppercase text-white bg-very-dark-grayish-cyan self-center flex items-center h-6 px-2 rounded-3xl text-sm">
              <span className="h-4">featured</span>
            </div>
          )}
        </div>
        <p className="py-1 lg:pb-0 lg:text-[1.45rem] hover:text-desaturated-dark-cyan  transition-all duration-700 hover:cursor-pointer">
          {position}
        </p>
        <div className="flex items-center text-dark-grayish-cyan py-1 lg:py-0 text-[0.9375rem] lg:text-lg">
          <div>{postedAt}</div>
          <span className="w-1 h-1 mx-3 lg:mx-[1.125rem] rounded-[100%] bg-dark-grayish-cyan"></span>
          <div>{contract}</div>
          <span className="w-1 h-1  mx-3 lg:mx-[1.125rem] rounded-[100%] bg-dark-grayish-cyan"></span>
          <div>{location}</div>
        </div>
        <div className="border-b my-2 border-b-dark-grayish-cyan lg:hidden"></div>
      </div>
      <div className="flex gap-x-3 gap-y-4 pt-2 flex-wrap lg:ml-auto">
        <Tag title={role} />
        <Tag title={level} />
        {languages.map((language) => {
          return <Tag key={language} title={language} />;
        })}
        {tools.map((tool) => {
          return <Tag key={tool} title={tool} />;
        })}
      </div>
    </div>
  );
};

export default Item;

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
    ? `relative bg-white mx-6 px-5 pb-6 font-league-spartan rounded-lg border-l-4 border-l-desaturated-dark-cyan`
    : "relative bg-white mx-6 px-5 pb-6 font-league-spartan rounded-lg";

  return (
    <div className={containerClass}>
      <img className="absolute left-5 -top-6 w-12" src={logo} alt={company} />
      <div>
        <div className="flex pt-8 gap-x-2 items-start">
          <p className="text-desaturated-dark-cyan mr-4 self-center">
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
        <p className="py-2">{position}</p>
        <div className="flex items-center text-dark-grayish-cyan py-1 text-[0.9375rem]">
          <div>{postedAt}</div>
          <span className="w-1 h-1 mx-3 rounded-[100%] bg-dark-grayish-cyan"></span>
          <div>{contract}</div>
          <span className="w-1 h-1  mx-3 rounded-[100%] bg-dark-grayish-cyan"></span>
          <div>{location}</div>
        </div>
        <div className="border-b my-2 border-b-dark-grayish-cyan"></div>
      </div>
      <div className="flex gap-x-3 gap-y-4 pt-2 flex-wrap">
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

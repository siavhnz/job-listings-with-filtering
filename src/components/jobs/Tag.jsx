const Tag = ({ title }) => {
  return (
    <div className="flex items-center text-desaturated-dark-cyan bg-desaturated-dark-cyan bg-opacity-10 py-1 px-3 rounded-sm h-8">
      <span className="h-5">{title}</span>
    </div>
  );
};

export default Tag;

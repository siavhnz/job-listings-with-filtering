import { useContext } from "react";
import Close from "../../assets/images/icon-remove.svg";
import { JobsContext } from "../../store/jobs-context";
import { AnimatePresence, motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const containerVariants = {
  hidden: { opacity: 0, height: 0, marginBottom: "5.75rem" },
  visible: {
    opacity: 1,
    height: "auto",
    marginBottom: "3.5rem",
  },
};

const FilterBox = () => {
  const jobsCtx = useContext(JobsContext);
  const items = jobsCtx.filters;
  return (
    <AnimatePresence>
      {items.length > 0 && (
        <motion.div
          className="-mt-[5.75rem]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex items-center bg-white p-5 mx-6 rounded-lg font-league-spartan 1110:w-[1110px] 1110:mr-auto 1110:ml-auto">
            <div className="flex-1 flex gap-x-4 gap-y-4 flex-wrap">
              <AnimatePresence>
                {items.map((item) => {
                  return (
                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 1 }}
                      className="flex"
                      key={item}
                    >
                      <div className="pl-2 pr-3 py-1 rounded-l-sm bg-desaturated-dark-cyan bg-opacity-10 text-desaturated-dark-cyan">
                        {item}
                      </div>
                      <button
                        onClick={() => jobsCtx.removeFromFilter(item)}
                        aria-label={`remove ${item} filter`}
                        className="px-2 py-1 rounded-r-sm transition-all duration-700 bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan"
                      >
                        <img src={Close} aria-hidden={true} focusable={false} />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <button
              onClick={jobsCtx.clearAllFilter}
              className="text-dark-grayish-cyan leading-none transition-all duration-700 hover:text-desaturated-dark-cyan hover:border-b border-b-desaturated-dark-cyan"
              aria-label="clear filters"
            >
              Clear
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterBox;

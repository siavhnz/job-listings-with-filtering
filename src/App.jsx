import Jobs from "./components/jobs/Jobs";
import JobsContextProvider from "./store/jobs-context";

function App() {
  return <JobsContextProvider>
    <Jobs />
  </JobsContextProvider>
}

export default App;

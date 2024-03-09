import "./App.css";
import { ProfileCard } from "./components/ProfileCard";

function App() {
  return (
    <main
      className=" relative min-h-screen bg-Darkcyan  flex justify-center items-center 
    p-4 overflow-hidden"
    >
      {/* bg-pattern */}
      <img
        src="./images/bg-pattern-top.svg"
        alt="bg-pattern-top"
        className="absolute top-[-200px] left-[-200px] sm:top-[-450px] sm:left-[-450px]"
      />
      <img
        src="./images/bg-pattern-bottom.svg"
        alt="bg-pattern-bottom"
        className="absolute bottom-[-200px] right-[-200px] sm:bottom-[-450px] sm:right-[-450px]"
      />
      {/* profile card */}
      <ProfileCard />
    </main>
  );
}

export default App;

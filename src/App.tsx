import { Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import StackBar from "./stacks/StackBar";
import Footer from "./components/layout/Footer";
import Hero from "./Hero";

const stacksFetch = async() => {
  const res = await fetch('/data.json');
  return await res.json();
};

const App = () => {
  return (
      <div>
      <Navbar />
      <Hero/>
          <Suspense fallback={<>Loading...</>}>
              <StackBar stacksFetch={stacksFetch()} />
      </Suspense>
      <Footer/>
      </div>
  );
};

export default App;
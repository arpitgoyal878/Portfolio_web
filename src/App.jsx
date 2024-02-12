import { lazy, Suspense, useEffect } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Contact = lazy(() => import("./components/Contact"));

import ReactGA from "react-ga";
//tracting ID

const TrackingId = "UA-302303477-1";
ReactGA.initialize(TrackingId);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, []);
  return (
    <Suspense
      fallback={
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      }
    >
      <div className="App container my-10 mx-auto max-w-screen-lg bg-black">
        <Header />
        <main>
          <Hero />
          <Project />
          <Skill />
          <Contact />
        </main>
      </div>
    </Suspense>
  );
}

export default App;

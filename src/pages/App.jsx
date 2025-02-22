// Library Import
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Pages Import
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

// Components Import
import Loading from "../components/Loading";
import ErrorBoundary from "../components/ErrorBoundary";

const App = () => {
  return (
    <div className="bg-white px-5 text-gray-900 md:px-8 lg:px-24 xl:px-40">
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;

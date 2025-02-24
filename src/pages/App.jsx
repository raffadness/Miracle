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
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div className="bg-white text-gray-900">
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <Header />
                <Home />
                <Footer />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loading />}>
                <Header />
                <About />
                <Footer />
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

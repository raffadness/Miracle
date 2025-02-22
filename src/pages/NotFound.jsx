import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-5xl">404 Not Found</h1>
        <Link
          to="/"
          className="rounded-xl border border-solid border-gray-900 px-3 py-2"
        >
          Go back
        </Link>
      </div>
    </>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="d-flex flex-column gap-5 mt-5 align-items-center justify-content-center h-100">
      <h1 className="text-danger">Error page</h1>
      <Link to="/">
        <button className="btn btn-primary">Go home</button>
      </Link>
    </div>
  );
};

export default Error;

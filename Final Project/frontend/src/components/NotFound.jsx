import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="shadow p-3 mb-5 rounded mt-5 pb-5">
        <h1 className="text-center">404</h1>
        <h2 className="text-center">Page Not Found</h2>
        <br />
        <center>
          <Link to="/" className="btn btn-outline-primary">
            Go Home
          </Link>
        </center>
      </div>
    </>
  );
}

export default NotFound;

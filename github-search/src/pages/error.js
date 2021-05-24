import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error-section">
      <h1>404</h1>
      <h3>Sorry, page not available</h3>
      <Link to="/" className="btn">Back to login</Link>
    </div>
  );
};
export default Error;

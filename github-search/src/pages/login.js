import loginImage from "../images/login-img.svg";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login-section">
      <div className="container">
        <img src={loginImage} alt="loginuser" />
        <h1>Github user</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Login/sign up
        </button>
      </div>
    </div>
  );
};
export default Login;

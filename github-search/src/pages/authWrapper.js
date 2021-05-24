import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingImg from "../images/preloader.gif";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <section>
        <img src={loadingImg} alt="spiner" />
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <h1>{error.message}</h1>
      </section>
    );
  }
  return <>{children}</>;
};
export default AuthWrapper;

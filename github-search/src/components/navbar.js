import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } =
    useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <section className="navbar-section">
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}

      {isUser ? (
        <button
          type="button"
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      ) : (
        <button type="button" onClick={loginWithRedirect}>
          Login
        </button>
      )}
    </section>
  );
};
export default Navbar;

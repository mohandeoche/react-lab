import React from "react";
import { GithubContext } from "../context/context";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const [user, setUser] = React.useState("");
  const { requests, error, searchGithubUser } = React.useContext(GithubContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
  };
  return (
    <section className="search-section">
      <div className="section-center">
        <form onSubmit={handleSubmit}>
          <section className="error-wrapper">
            {error.show && <p>{error.msg}</p>}
          </section>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter search value"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && <button type="submit">Search</button>}
          </div>
        </form>
        <h3>request: {requests}/60</h3>
      </div>
    </section>
  );
};
export default Search;

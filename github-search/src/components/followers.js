import React from "react";
import { GithubContext } from "../context/context";
const Followers = () => {
  const { followers } = React.useContext(GithubContext);

  return (
    <article className="followers-article">
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url, login, html_url } = follower;
          return (
            <article key={index}>
              <img src={avatar_url} alt="not available" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
};
export default Followers;

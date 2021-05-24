import React from "react";
import { GithubContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      icon: <GoRepo />,
      label: "users",
      value: public_repos,
    },
    {
      id: 2,
      icon: <FiUsers />,
      label: "followers",
      value: followers,
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      label: "following",
      value: following,
    },
    {
      id: 4,
      icon: <GoGist />,
      label: "gist",
      value: public_gists,
    },
  ];
  return (
    <section className="userinfo-section">
      <section className="section-center">
        {items.map((item) => {
          const { id, icon, value, label } = item;
          return (
            <article key={id} className="item">
              <span className="git-icon">{icon}</span>
              <div>
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default UserInfo;

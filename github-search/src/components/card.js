import React from "react";
import { GithubContext } from "../context/context";
import { MdLocationOn, MdLink } from "react-icons/md";
const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { bio, html_url, name, location, blog, avatar_url } = githubUser;
  return (
    <article className="card-article">
      <header>
        <img src={avatar_url} alt={name || "Mohan Deoche"} />
        <div>
          <h4>{name || "Mohan Deoche"}</h4>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdLocationOn></MdLocationOn>
          {location || "Earth"}
        </p>
        <a
          href={`${
            blog || "https://www.linkedin.com/in/mohan-deoche-aa599851/"
          }`}
        >
          <MdLink></MdLink>
          {blog || "Linkdin"}
        </a>
      </div>
    </article>
  );
};
export default Card;

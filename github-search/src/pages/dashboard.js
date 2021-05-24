import React from "react";
import { Info, Users, Repos, Navbar } from "../components";
import Search from "../components/search";
import { GithubContext } from "../context/context";
import loadingImg from "../images/preloader.gif";
const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImg} className="loading-img" alt="loading" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <Users />
      <Repos />
    </main>
  );
};
export default Dashboard;

import React, { useState, useEffect } from "react";
import Card from "./card";
import Followers from "./followers";
import Repos from "./repos";
const Users = () => {
  return (
    <section className="user-section">
      <div className="section-center">
        <Card />
        <Followers />
      </div>
    </section>
  );
};
export default Users;

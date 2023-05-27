import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
import Links from "./Links";
console.log(user);

function PropsForHome(user) {
  return <Home city={user.city} color={user.color} name={user.name} />;
}

function PropsForAbout(user) {
  return <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />;
}

/* function PropsForLinks(user) {
  return <Links github={user.links.github} linkedin={user.links.linkedin} />;
}
PropsForLinks(); */

function App() {
  return (
    <div>
      <NavBar />
      {PropsForHome(user)}
      {PropsForAbout(user)}
    </div>
  );
}

export default App;

import React from "react";
import Title from "../../components/Title"; 
import { auth } from "../../hooks/auth";
import Appbar from "../../components/AppBar";

const Home: React.FC = () => {
  return (
    <div>
      <Appbar/>
      <Title>Home</Title>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}

export default Home;
import React from "react";
import Title from "../../components/Title";
import { auth } from "../../hooks/auth";

const Home: React.FC = () => {
  return (
    <div>
      <Title>Home</Title>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}

export default Home;
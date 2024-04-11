import React from "react";

const Home = () => {
  return (
    <div className="bg-top">
      <div className="h-screen bg-blue-400">Top</div>
      <div className="px-20">
        <div className="h-screen bg-green-400">Middle</div>
        <div className="h-screen bg-red-400">Bottom</div>
      </div>
    </div>
  );
};

export default Home;

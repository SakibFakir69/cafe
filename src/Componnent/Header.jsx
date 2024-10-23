import React from "react";

function Header() {
  return (
    <div>
      <div className="flex justify-between mb-4 text-center mt-2 mx-auto container">
        <h2 className="text-3xl font-semibold">Knowledge Cafe</h2>
        <img src="./image/profile.png"></img>
      </div>
      <hr className=""></hr>
    </div>
  );
}

export default Header;

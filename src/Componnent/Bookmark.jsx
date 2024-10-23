import { prototype } from "postcss/lib/previous-map";
import PropTypes from "prop-types";
import React from "react";
import Live from "./Live";

function Bookmark({ bookmarked, time }) {
  if (!bookmarked) {
    return null;
  }

  return (
    <div className="md:w-1/4 mt-4 px-2">
      {/* here we make left side tools show title add, remove and show time */}
      <div className="text-center border-2 border-green-400 p-6 bg-green-200 rounded-md">
        <p className="text-xl font-semibold ">Spent time on read : {time} min</p>
      </div>

      <div className=" mt-10 rounded-md shadow-lg border-2 p-4">
        {bookmarked.map((book, key) => (
          <Live live={book.title} />
        ))}
      </div>
    </div>
  );
}

Bookmark.prototype = {
  bookmarked: PropTypes.array.isRequired,
};

export default Bookmark;

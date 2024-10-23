import React from "react";

function Blogs({ post,handelBookmarked,handelTime }) {
  console.log(post);

  const {
    title,
    name,
    id,
    hashtags,
    coverPhoto,
    author,
    postedDate,
    readingTime,
  } = post;
  /// here we make web visible
  return (
    <div>
      <img src={coverPhoto} className="w-full mt-4  rounded-md" />

      <div className="flex justify-between mt-6 border-2 p-2  rounded-md">
        <div className="mt-4">
          <div className="flex space-x-2">
            <img src={author.image} className="h-10"></img>
            <p className="text-xl font-bold">{author.name}</p>
          </div>

          <p className="text-xl font-semibold text-green-500 rounded-md">{postedDate}</p>
          <p className="text-xl font-bold ">{title}</p>
          <button onClick={()=>handelTime(id,readingTime)} className="text-xl underline text-cyan-700">Mark As Read</button>
        </div>

        <div className="mt-4">
          <p className="text-xl font-semibold">{readingTime} m</p>

          <button onClick={()=>handelBookmarked(post)}><i class="ri-bookmark-3-line text-2xl font-bold"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

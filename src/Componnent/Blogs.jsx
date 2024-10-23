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
      <img src={coverPhoto} className="w-full" />

      <div className="flex justify-between">
        <div className="mt-4">
          <div className="flex space-x-2">
            <img src={author.image} className="h-10"></img>
            <p className="text-xl font-bold">{author.name}</p>
          </div>

          <p>{postedDate}</p>
          <button onClick={()=>handelTime(id,readingTime)}>Mark As Read</button>
        </div>
        <div>
          <p>{readingTime} m</p>

          <button onClick={()=>handelBookmarked(post)}><i class="ri-bookmark-3-line text-2xl font-bold"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

$(".members .member_image").each(function (index) {
  $(this).attr(
    "src",
    `https://jsonplaceholder.typicode.com/photos/${index + 1}`
  );
});

$(".articles .article_image").each(function (index) {
  $(this).attr(
    "src",
    `https://jsonplaceholder.typicode.com/photos/${index + 6}`
  );
});

$(".articles .article_text").each(async function (index) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${index + 1}`
  );
  if (post.length > 50) post = post.substring(0, 50) + "...";
  $(this).text(post);
});

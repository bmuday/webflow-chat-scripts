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
  let post;
  $.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
    success: function (data) {
      post = data;
      console.log("post", data);
    },
    error: function (error) {
      console.log("FAIL....=================", error);
    },
  });
  //   if (post.length > 50) post = post.substring(0, 50) + "...";
  $(this).text(post);
});

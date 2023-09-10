$(".members .member_image").each(function (index) {
  const { thumbnailUrl } = $.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
    success: function (data) {
      return data;
    },
    error: function (error) {
      console.log("FAIL....=================", error);
    },
  });
  $(this).attr("src", thumbnailUrl);
});

$(".articles .article_image").each(function (index) {
  const { thumbnailUrl } = $.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/photos/${index + 6}`,
    success: function (data) {
      return data;
    },
    error: function (error) {
      console.log("FAIL....=================", error);
    },
  });
  $(this).attr("src", thumbnailUrl);
});

$(".articles .article_text").each(async function (index) {
  const { body } = $.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/posts/${index + 1}`,
    success: function (data) {
      return data;
    },
    error: function (error) {
      console.log("FAIL....=================", error);
    },
  });
  if (body.length > 50) body = body.substring(0, 50) + "...";
  $(this).text(post);
});

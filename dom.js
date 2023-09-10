$(".members .member_image").each(function (index) {
  let url;
  $(document).ready(function () {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = res;
        url = data.thumbnailUrl;
      })
      .fail(function (error) {
        console.log(
          "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
        );
      })
      .always(function () {
        console.log("Requête effectuée");
      });
  });
  console.log("this1", this);
  $(this).attr("src", url);
});

$(".articles .article_image").each(function (index) {
  let url;
  $(document).ready(function () {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 6}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = res;
        url = data.thumbnailUrl;
      })
      .fail(function (error) {
        console.log(
          "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
        );
      })
      .always(function () {
        console.log("Requête effectuée2");
      });
  });
  console.log("this2", this);
  $(this).attr("src", url);
});

$(".articles .article_text").each(async function (index) {
  let body;
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts/${index + 1}`,
    method: "GET",
    dataType: "json",
  })
    .done(function (res) {
      const data = res;
      body = data.body;
      if (body.length > 20) body = body.substring(0, 20) + "...";
    })
    .fail(function (error) {
      console.log(
        "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
      );
    })
    .always(function () {
      console.log("Requête effectuée3");
    });
  console.log("this3", this);
  $(this).text(body);
});

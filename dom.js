$(".members .member_image").each(function (index) {
  $(document).ready(function () {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = res;
        console.log("data1", data);
        const { thumbnailUrl } = data;
        console.log("thumbnailUrl", thumbnailUrl);
        console.log("this1", $(this));
        $(this).attr("src", thumbnailUrl);
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
});

$(".articles .article_image").each(function (index) {
  $(document).ready(function () {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 6}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = res;
        console.log("data2", data);
        const { thumbnailUrl } = data;
        console.log("thumbnailUrl", thumbnailUrl);
        console.log("this2", $(this));
        $(this).attr("src", thumbnailUrl);
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
});

$(".articles .article_text").each(async function (index) {
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts/${index + 1}`,
    method: "GET",
    dataType: "json",
  })
    .done(function (res) {
      const data = res;
      console.log("data3", data);
      let { body } = data;
      console.log("body", body);
      if (body.length > 20) body = body.substring(0, 20) + "...";
      console.log("this3", $(this));
      $(this).text(body);
    })
    .fail(function (error) {
      console.log(
        "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
      );
    })
    .always(function () {
      console.log("Requête effectuée3");
    });
});

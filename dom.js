$(".members .member_image").each(function (index) {
  $(document).ready(function () {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = JSON.parse(res);
        console.log("data1", data);
        const { thumbnailUrl } = data;
        console.log("thumbnailUrl", thumbnailUrl);
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
        const data = JSON.parse(res);
        console.log("data2", data);
        const { thumbnailUrl } = data;
        console.log("thumbnailUrl", thumbnailUrl);
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
      const data = JSON.parse(res);
      console.log("data3", data);
      const { body } = data;
      console.log("body", body);
      if (body.length > 50) body = body.substring(0, 50) + "...";
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

$(document).ready(function () {
  $(".members .member_image").each(function (index) {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (data) {
        console.log("data1", data);
        console.log("this1", $this);
      })
      .fail(function (error) {
        console.log(
          "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
        );
      })
      .always(function () {
        console.log("Requête effectuée");
      });
    // $(this).attr("src", thumbnailUrl);
  });

  $(".articles .article_image").each(function (index) {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 6}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (data) {
        console.log("data2", data);
        console.log("this2", $this);
      })
      .fail(function (error) {
        console.log(
          "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
        );
      })
      .always(function () {
        console.log("Requête effectuée2");
      });
    // $(this).attr("src", thumbnailUrl);
  });

  $(".articles .article_text").each(function (index) {
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (data) {
        console.log("data3", data);
        console.log("this3", $this);
      })
      .fail(function (error) {
        console.log(
          "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
        );
      })
      .always(function () {
        console.log("Requête effectuée3");
      });
    // if (body.length > 20) body = body.substring(0, 20) + "...";
    // $(this).text(body);
  });
});

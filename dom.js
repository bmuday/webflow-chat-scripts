$(document).ready(function () {
  $.ajax({
    url: `https://jsonplaceholder.typicode.com/photos`,
    method: "GET",
    dataType: "json",
  })
    .done(function (data) {
      console.log("data1", data);
      $(".members .member_image").each(function (index) {
        const { thumbnailUrl } = data[index];
        $(this).attr("src", thumbnailUrl);
      });
    })
    .fail(function (error) {
      console.log(
        "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
      );
    })
    .always(function () {
      console.log("Requête effectuée2");
    });

  $.ajax({
    url: `https://jsonplaceholder.typicode.com/photos`,
    method: "GET",
    dataType: "json",
  })
    .done(function (data) {
      console.log("data2", data);
      $(".articles .article_image").each(function (index) {
        const { thumbnailUrl } = data[index];
        $(this).attr("src", thumbnailUrl);
      });
    })
    .fail(function (error) {
      console.log(
        "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
      );
    })
    .always(function () {
      console.log("Requête effectuée2");
    });

  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "GET",
    dataType: "json",
  })
    .done(function (data) {
      console.log("data3", data);
      $(".articles .article_text").each(function (index) {
        const { body } = data[index];
        if (body.length > 20) body = body.substring(0, 20) + "...";
        console.log("body", body);
        console.log("this", $(this));
        $(this).text(body);
      });
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

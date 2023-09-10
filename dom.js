$(document).ready(function () {
  $(".members .member_image").each(function (index) {
    const data = $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (data) {
        return data;
      })
      .fail(function (error) {
        console.log(
          "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
        );
      })
      .always(function () {
        console.log("Requête effectuée");
      });
    console.log("this1", this);
    const res = data.responseJSON;
    console.log("url", res);
    // $(this).attr("src", thumbnailUrl);
  });

  $(".articles .article_image").each(function (index) {
    const data = $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 6}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (data) {
        return data;
      })
      .fail(function (error) {
        console.log(
          "La requête s'est terminée en échec. Infos : " + JSON.stringify(error)
        );
      })
      .always(function () {
        console.log("Requête effectuée2");
      });
    console.log("this2", this);
    const res = data.responseJSON;
    console.log("url", res);
    // $(this).attr("src", thumbnailUrl);
  });

  $(".articles .article_text").each(function (index) {
    const data = $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (data) {
        return data;
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
    const res = data.responseJSON;
    // if (body.length > 20) body = body.substring(0, 20) + "...";
    console.log("body", res);
    // $(this).text(body);
  });
});

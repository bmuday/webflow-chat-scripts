$(document).ready(function () {
  $(".members .member_image").each(function (index) {
    const url = $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = res;
        return data.thumbnailUrl;
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
    console.log("url", url);
    //   $(this).attr("src", url);
  });

  $(".articles .article_image").each(function (index) {
    const url = $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${index + 6}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = res;
        url = data.thumbnailUrl;
        return url;
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
    console.log("url", url);
    //   $(this).attr("src", url);
  });

  $(".articles .article_text").each(async function (index) {
    const body = $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/${index + 1}`,
      method: "GET",
      dataType: "json",
    })
      .done(function (res) {
        const data = res;
        if (body.length > 20) body = body.substring(0, 20) + "...";
        return data.body;
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
    console.log("body", body);
    //   $(this).text(body);
  });
});

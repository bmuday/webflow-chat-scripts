import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { useErrorStore } from "./store";

// Supabase Client
const supabase = createClient(
  "https://bkfjctowhklpuqpamybu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrZmpjdG93aGtscHVxcGFteWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNjk3NDUsImV4cCI6MjAwOTk0NTc0NX0.uwp1Jx7xBQH88JCn8k67nQQE2o-0QnjBAKkwuBLV4j8"
);

console.log("useError", useErrorStore);
const error = useErrorStore((state) => state.error);
console.log("error", error);

async function checkSession() {
  const { data, error } = await supabase.auth.getSession();
  console.log("data", data);
  console.log("error", error);
}

// jQuery
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
    });

  $.ajax({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "GET",
    dataType: "json",
  })
    .done(function (data) {
      console.log("data3", data);
      $(".articles .article_text").each(function (index) {
        let { body } = data[index];
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
    });

  checkSession();
});

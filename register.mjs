$(document).ready(function () {
  $(".register_input").focus(function () {
    $(this).css("border", "1px solid #1991eb");
  });

  $(".register_input").blur(function () {
    $(this).css("border", "");
  });
});

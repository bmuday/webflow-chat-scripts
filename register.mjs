$(document).ready(function () {
  $(".register_input").focus(function () {
    $(this).css("border", "1px solid #1991eb");
  });

  $(".register_input").blur(function () {
    $(this).css("border", "");
  });

  async function createUser() {
    const { data, error } = await supabase.auth.signUp({
      email: "example@email.com",
      password: "example-password",
    });

    console.log("data", data);
    console.log("error", error);
  }

  $(".register_form").submit(async function (e) {
    e.preventDefault();

    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();

    console.log("values", username, email, password);

    await createUser(email, password);
  });
});

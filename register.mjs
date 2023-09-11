import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Supabase Client
const supabase = createClient(
  "https://bkfjctowhklpuqpamybu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrZmpjdG93aGtscHVxcGFteWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNjk3NDUsImV4cCI6MjAwOTk0NTc0NX0.uwp1Jx7xBQH88JCn8k67nQQE2o-0QnjBAKkwuBLV4j8"
);

$(document).ready(function () {
  $(".register_input").focus(function () {
    $(this).css("border", "1px solid #1991eb");
  });

  $(".register_input").blur(function () {
    $(this).css("border", "");
  });

  async function createUser(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
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

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import $ from "https://code.jquery.com/jquery-3.7.1.min.js";

const supabase = createClient(
  "https://bkfjctowhklpuqpamybu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrZmpjdG93aGtscHVxcGFteWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNjk3NDUsImV4cCI6MjAwOTk0NTc0NX0.uwp1Jx7xBQH88JCn8k67nQQE2o-0QnjBAKkwuBLV4j8"
);

console.log("supabase", supabase);

$(".members .member_image").each(function (index) {
  $(this).attr("src", `https://picsum.photos/id/${index}/200`);
});

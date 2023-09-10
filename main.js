const { createClient } = supabase;
import $ from "jquery";

// Create a single supabase client for interacting with your database
const _supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

console.log(
  "env",
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
console.log("supabase", _supabase);

$(".members .member_image").each(function (index) {
  $(this).attr("src", `https://picsum.photos/id/${index}/200`);
});

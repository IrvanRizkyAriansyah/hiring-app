import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "./supabase/server";
import { getSupabaseClient } from "./supabase/client";

export async function checkUserRole() {
  const supabase = getSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: admin } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .single();

  if (admin) {
    return "admin";
  } else {
    return "user";
  }
}

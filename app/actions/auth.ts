"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

interface LoginPayload {
  email: string;
  password: string;
}


export async function logout() {
  const supabase = await getSupabaseServerClient();

  await supabase.auth.signOut();

  redirect("/login");
}

export async function loginAction(payload: LoginPayload) {
  const supabase = await getSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  redirect("/job-list");
  console.log('success')
}


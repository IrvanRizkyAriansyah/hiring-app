import { requireUser } from "@/lib/authGuard";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await requireUser();

  redirect("/job-list");
}

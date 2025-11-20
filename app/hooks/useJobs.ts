"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";

export function useJobs() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabaseClient();

    let mounted = true;

    const load = async () => {
      const { data, error } = await supabase.from("jobs").select("*");

      if (!mounted) return;

      if (!error) setJobs(data || []);
      setLoading(false);
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  return { jobs, loading };
}

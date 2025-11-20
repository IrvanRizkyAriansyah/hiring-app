"use client";

import { getSupabaseClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function useSupabaseData(
  table: string,
  query = "*",
  filters?: { [key: string]: any } // contoh: { role: "admin", active: true }
) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = getSupabaseClient();

      let q = supabase.from(table).select(query);

      // Apply filters
      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          q = q.eq(key, value);
        });
      }

      const { data, error } = await q;

      if (error) setError(error);
      else setData(data);

      setLoading(false);
    };

    fetchData();
  }, [table, query, JSON.stringify(filters)]);

  return { data, loading, error };
}

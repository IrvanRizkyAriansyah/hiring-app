"use client";

import { getSupabaseClient } from "@/lib/supabase/client";
import { useState } from "react";

/**
 * Universal Supabase mutation hook for insert, update, delete
 */
export function useSupabaseMutation(table: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [data, setData] = useState<any>(null);

  const supabase = getSupabaseClient();

  // INSERT
  const insert = async (payload: object) => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from(table)
      .insert(payload)
      .select(); // return inserted data

    if (error) setError(error);
    else setData(data);

    setLoading(false);
    return { data, error };
  };

  // UPDATE
  const update = async (filters: { [key: string]: any }, payload: object) => {
    setLoading(true);
    setError(null);

    let query = supabase.from(table).update(payload);

    Object.entries(filters).forEach(([key, val]) => {
      query = query.eq(key, val);
    });

    const { data, error } = await query.select(); // return updated data

    if (error) setError(error);
    else setData(data);

    setLoading(false);
    return { data, error };
  };

  // DELETE
  const remove = async (filters: { [key: string]: any }) => {
    setLoading(true);
    setError(null);

    let query = supabase.from(table).delete();

    Object.entries(filters).forEach(([key, val]) => {
      query = query.eq(key, val);
    });

    const { data, error } = await query.select(); // return deleted rows

    if (error) setError(error);
    else setData(data);

    setLoading(false);
    return { data, error };
  };

  return {
    insert,
    update,
    remove,
    loading,
    error,
    data,
  };
}

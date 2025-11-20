"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";

export interface JobFilter {
  search?: string;       // optional search by title
  limit?: number;        // limit rows
  offset?: number;       // pagination
  orderBy?: string;      // sort field
  ascending?: boolean;   // sort direction
}

export async function getJobsAction(filter?: JobFilter) {
  const supabase = await getSupabaseServerClient();

  let query = supabase.from("jobs").select("*");

  // Search by job title
  if (filter?.search) {
    query = query.ilike("title", `%${filter.search}%`);
  }

  // Sorting
  if (filter?.orderBy) {
    query = query.order(filter.orderBy, { ascending: filter.ascending ?? true });
  }

  // Pagination
  if (filter?.limit !== undefined) {
    query = query.limit(filter.limit);
  }
  if (filter?.offset !== undefined) {
    query = query.range(filter.offset, (filter.offset + (filter.limit ?? 10)) - 1);
  }

  const { data, error } = await query;

  if (error) {
    return { success: false, message: error.message, data: [] };
  }

  return { success: true, data };
}

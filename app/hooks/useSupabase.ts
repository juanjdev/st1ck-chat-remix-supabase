import { useOutletContext } from "@remix-run/react"
import { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "~/types/database"

type TypedSupabaseClient = SupabaseClient<Database>

export type SupabaseOutletConext = {
    supabase: TypedSupabaseClient
}

export const useSupabase = () => {
    const {supabase}  = useOutletContext<SupabaseOutletConext>()
    return supabase
}
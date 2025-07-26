import { env } from "@/lib/config";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const createClient = () =>
    createBrowserClient(
         env.SUPABASE_URL!,
                env.SUPABASE_ANON_KEY!,
    );

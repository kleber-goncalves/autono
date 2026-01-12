import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

console.log("URL do Supabase:", supabaseUrl);

if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
        "ERRO: Variáveis de ambiente não encontradas! Verifique o arquivo .env"
    );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

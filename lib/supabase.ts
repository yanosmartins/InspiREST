// 1. Criando conexão com o supa
import { createClient } from '@supabase/supabase-js';

// 2. Observa o arquivo .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 3. Aviso, caso o env esteja vazio/n exista
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltam as variáveis de ambiente do Supabase no arquivo .env.local');
}

// 4. exportando pros demais arquivos verem
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
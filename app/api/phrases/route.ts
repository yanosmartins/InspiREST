// 1. Importando a ferramenta do Next.js para responder requisições na web
import { NextResponse } from 'next/server';
// 2. Conexão com o Supa
import { supabase } from '@/lib/supabase';

// 3. A função leva o verbo do método que vai ser chamado na URL
    // async garante que o código espere o retorno do banco pra seguir pra próxima linha de código
export async function GET() {
  try {
    // 4. Consulta todas as frases da tabela no supa
    const { data: phrases, error } = await supabase
      .from('phrases')
      .select('*');

    // 5. Se o Supabase responder com algum erro, o erro é jogado pro "catch"
    if (error) {
      throw error;
    }

    // 6. Se deu tudo certo, retorna em json o conteudo
    return NextResponse.json(phrases, { status: 200 }); // 200 "OK / Sucesso".

  } catch (error: any) {
    // 7. O bloco "catch" só roda quando algo der muito errado (ex: banco fora do ar ou senha errada)
    
    return NextResponse.json({ error: error.message }, { status: 500 }); // 500"Erro Interno do Servidor".
  }
}
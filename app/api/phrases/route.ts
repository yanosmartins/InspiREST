import { supabase } from '@/lib/supabase';//conexao com o supa
import { NextResponse, NextRequest } from 'next/server'; 
//NextResponse responde as requisicoes da web
//NextRequest permite a leitura das requisicoes das urls

// A função leva o verbo do método que vai ser chamado na URL
// async garante que o código espere o retorno do banco pra seguir pra próxima linha de código
export async function GET(request:NextRequest) { //request vai receber os parametros da requisicao
  try {
    const { searchParams } = new URL(request.url); //armazena a URL completa
    //captura dos parametros:
    const lang = searchParams.get('lang');               // idioma
    const author = searchParams.get('author');           // autor
    const count_limit = searchParams.get('count_limit'); // quantidade de caracteres

    // consulta tudo da tabela phrases no supa
    let query = supabase.from('phrases').select('*');

    //FILTROS (com base nos parametros):
    // .eq significa "equal" (igual a) => query + WHERE lang igual a (valor no parametro da url)
    if (lang) {
      query = query.eq('language', lang); 
    }

    if (author) {
      query = query.eq('author', author);
    }


    // EXECUÇÃO =  Consulta a query com os filtros
    const { data: phrases, error } = await query;

    // Se o Supabase responder com algum erro, o erro é jogado pro "catch"
    if (error) {
      throw error;
    }

  let result = phrases;

    if (count_limit) { // Filtra onde (length) da coluna content é menor ou igual o count
        result = result.filter(
    phrase => phrase.content.length <= parseInt(count_limit)  // Converte a string no parametro da url pra valor inteiro
  );
    } //content.length pega a qts de caracteres

    // Se deu tudo certo, retorna em json o conteudo
    return NextResponse.json(result, { status: 200 }); // 200 "OK / Sucesso".

  } catch (error: any) {
    // O bloco "catch" só roda quando algo der muito errado (ex: banco fora do ar ou senha errada)
    
    return NextResponse.json({ error: error.message }, { status: 500 }); // 500"Erro Interno do Servidor".
  }
}
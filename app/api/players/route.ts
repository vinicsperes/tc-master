// app/api/players/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name'); // Exemplo: busca por nome

  try {
    const response = await axios.get('https://www.balldontlie.io/api/v1/players', {
      params: { 
        search: name || '', // Se houver um nome, usa-o para pesquisa; senão, retorna todos.
        per_page: 10 
      },
    });
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar dados de jogadores' }, { status: 500 });
  }
}

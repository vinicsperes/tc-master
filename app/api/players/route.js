import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const { data } = await axios.get('https://www.balldontlie.io/api/v1/players', {
      params: { per_page: 5, page: 1 }, // Parâmetros para controlar o número de resultados
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao buscar dados de jogadores' }, { status: 500 });
  }
}
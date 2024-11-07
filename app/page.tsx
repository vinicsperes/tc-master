"use client"; // Marcar este componente como Client Component

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const { data } = await axios.get('/api/players');
        setPlayers(data.data);
      } catch (error) {
        console.error('Erro ao buscar dados dos jogadores:', error);
      }
    }
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Jogadores da NBA</h1>
      <ul>
        {players.map((player: any) => (
          <li key={player.id}>
            {player.first_name} {player.last_name} - {player.team.full_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

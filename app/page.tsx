"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState(''); // Estado para o termo de busca

  const fetchPlayers = async (name: string = '') => {
    try {
      const { data } = await axios.get(`/api/players?name=${name}`);
      setPlayers(data.data);
    } catch (error) {
      console.error('Erro ao buscar dados dos jogadores:', error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleSearch = () => {
    fetchPlayers(search);
  };

  return (
    <div>
      <h1>Jogadores da NBA</h1>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Buscar jogador..."
      />
      <button onClick={handleSearch}>Buscar</button>
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetPlayersQuery } from "../api/api";
import "../index.css";

const Players = () => {
  const { data = {}, error, isLoading } = useGetPlayersQuery();
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    if (data?.data?.players) {
      setPlayersData(data.data.players);
    }
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error fetching player: {error.message}</div>;
  }

  return (
    <div className="players">
      {playersData.map((player) => (
        <Link
          to={`/players/${player.id}`}
          key={player.id}
          className="player-link"
        >
          <div className="player-card">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="player-image"
            />

            <div className="player-details">
              <h2>{player.name}</h2>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Players;

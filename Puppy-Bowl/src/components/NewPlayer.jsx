import React, { useState } from "react";
import { useCreatePlayerMutation } from "../api/api";
import { useNavigate } from "react-router-dom";

const NewPlayerForm = () => {
  const navigate = useNavigate();
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });
  const [createPlayer, { isLoading }] = useCreatePlayerMutation();
  const handleChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPlayer(playerData);
    } catch (error) {
      console.error("Error creating player:", error);
    }
    navigate("/");
  };

  return (
    <div className="form">
      <h1>Create a New Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={playerData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={playerData.breed}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={playerData.status}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={playerData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Player"}
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;

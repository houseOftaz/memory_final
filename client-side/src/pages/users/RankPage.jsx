import { useState, useEffect } from "react";
import ProfileCard from "../layout/ProfileCard";
import LinkBtn from "../../components/buttons/LinkBtn";

const RankPage = () => {
  const [usersWithGames, setUsersWithGames] = useState([]);

  useEffect(() => {
    const fetchUsersWithGames = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/auth/rank`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUsersWithGames(data);
      } else {
        throw new Error("Problème de connexion");
      }
    };
    fetchUsersWithGames();
  }, []);

  return (
    <div className="rank-container">
      {usersWithGames.length > 0 && (
        <ProfileCard usersWithGames={usersWithGames} />
      )}
      <h2 className="rank-title">Top 50</h2>
      <table className="classement-table">
        <thead>
          <tr>
            <th>Classement</th>
            <th>Prénom du joueur</th>
            <th>Parties jouées</th>
          </tr>
        </thead>
        <tbody>
          {usersWithGames.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.firstname}</td>
              <td>{user.games_played}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <LinkBtn linkTo="/" label="Retour" />
    </div>
  );
};

export default RankPage;

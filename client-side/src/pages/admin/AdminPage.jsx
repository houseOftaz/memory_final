import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../context/SessionContextProvider";

const AdminPage = () => {
  const { session } = useContext(SessionContext);
  const navigate = useNavigate();

  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL_BACKEND}/server-side/admin/admin`,
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
        setDataUsers(data);
      } else {
        throw new Error("Problème de connexion");
      }
    };
    fetchData();
  }, []);
  console.log(dataUsers);
  if (!session) {
    return <p>Loading</p>; // a ce stade la session est null / undifined
  } else if (session?.user?.role !== "admin") {
    navigate("/");
  } else {
    return (
      <div>
        <h1>Page Admin</h1>
        <p>sent la puissance du controle des joueurs mouahaha</p>
        <table>
          <thead>
            <tr>
              <th>Créer un nouveau joueur</th>
              <th>Modifier un joueur</th>
              <th>Supprimer un joueur</th>
              <th>Lister les joueurs</th>
              <th>Bannir un joueur</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/admin/user/${user.id}`}>Bannir</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default AdminPage;

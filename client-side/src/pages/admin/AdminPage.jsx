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
        setDataUsers(data.users || []);
      } else {
        throw new Error("Problème de connexion");
      }
    };
    fetchData();
  }, []);
  console.log(dataUsers);

  const handleBanish = async (userId) => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL_BACKEND
      }/server-side/admin/user/${userId}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      }
    );
    if (response.ok) {
      setDataUsers((prevData) => prevData.filter((user) => user.id !== userId));
    } else {
      throw new Error("Tentative de bannissement échouée");
    }
  };

  if (!session) {
    return <p>Loading</p>; // a ce stade la session est null / undifined
  } else if (session?.user?.role !== "admin") {
    navigate("/");
  } else {
    return (
      <div className="admin-page">
        <h1>Page Admin</h1>
        <table>
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom de famille</th>
              <th>Email</th>
              <th>Bannir</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleBanish(user.id)}
                    className="banish-btn"
                  >
                    Bannir
                  </button>
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

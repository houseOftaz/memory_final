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

  const handleBanish = async (e, userId, action) => {
    e.preventDefault();

    const URL =
      action === "banish"
        ? `${
            import.meta.env.VITE_BASE_URL_BACKEND
          }/server-side/admin/user/banish/${userId}`
        : `${
            import.meta.env.VITE_BASE_URL_BACKEND
          }/server-side/admin/user/unbanish/${userId}`;

    const response = await fetch(URL, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      setDataUsers((prevData) =>
        prevData.map((user) => {
          if (user.id === userId) {
            return { ...user, is_banned: action === "banish" ? 1 : 0 };
          }
          return user;
        })
      );
    } else {
      throw new Error(
        `Tentative de ${
          action === "banish" ? "bannissement" : "débannissement"
        } échouée`
      );
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
              <th className="responsive-table-admin">Prénom</th>
              <th className="responsive-table-admin">Nom de famille</th>
              <th>Email</th>
              <th>Bannir</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((user) => (
              <tr key={user.id}>
                <td className="responsive-table-admin">{user.firstname}</td>
                <td className="responsive-table-admin">{user.lastname}</td>
                <td>{user.email}</td>
                <td>
                  {user.is_banned ? (
                    <Link
                      to="#"
                      className="banish-btn"
                      onClick={(e) => handleBanish(e, user.id, "unbanish")}
                    >
                      Débannir
                    </Link>
                  ) : (
                    <Link
                      to="#"
                      onClick={(e) => handleBanish(e, user.id, "banish")}
                      className="banish-btn"
                    >
                      Bannir
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/" className="return-btn">
          Retour
        </Link>
      </div>
    );
  }
};

export default AdminPage;

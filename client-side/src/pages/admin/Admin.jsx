import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContextProvider";

const Admin = () => {
  const { session } = useContext(SessionContext);
  const navigate = useNavigate();

  if (!session) {
    return <p>Loading</p>; // a ce stade la session est null / undifined
  } else if (session?.user?.role !== "admin") {
    navigate("/");
  } else {
    return <div>Page Admin</div>;
  }
};

export default Admin;

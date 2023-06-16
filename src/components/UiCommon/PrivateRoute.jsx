import { Navigate } from "react-router-dom";
import SessionManager from "../../common/SessionManager";

const PrivateRoute = ({ children }) => {
  const user = (new SessionManager()).getLoggedUser();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
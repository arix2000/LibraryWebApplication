import { Navigate } from "react-router-dom";
import SessionManager from "../../common/SessionManager";
import AppRoutes from "../../common/AppRoutes";

const LoginRedirect = ({ children }) => {
  const user = (new SessionManager()).getLoggedUser();
  if (user !== null) {
    return <Navigate to={AppRoutes.homePage} />;
  }
  return children;
};

export default LoginRedirect;
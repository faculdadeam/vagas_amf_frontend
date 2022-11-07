import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import CircularProgress from "@mui/material/CircularProgress";

const UserRoute = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <CircularProgress />;
  console.log(user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default UserRoute;

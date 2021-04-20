import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoutes;

import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PublicRoutes = ({ component: Component, isAuthenticated, ...res }) => {
  return (
    <Route component={(props) => ((isAuthenticated ? <Redirect to='/' /> : <Component {...props} />))} {...res} />
  )
}

PublicRoutes.protoType = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
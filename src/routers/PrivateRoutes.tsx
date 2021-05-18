import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoutes = ({ component: Component, isAuthenticated, ...res }) => {
  return (
    <Route component={(props) => ((isAuthenticated ? <Component {...props} /> : <Redirect to='/auth/login' />))} {...res} />
  )
}

PrivateRoutes.protoType = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}
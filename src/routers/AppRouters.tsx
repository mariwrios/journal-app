import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { firebase } from "../firebase/firebase-config";

import { AuthRouter } from './AuthRouter';
import { JournalScreem } from '../components/journal/JournalScreem';
import { login } from '../actions/auth';
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { JournalLoader } from "../components/journal/JournalLoader";
import { startLoadingNotes } from "../actions/notes";



export const AppRouters = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggenIn, setIsLoggenIn] = useState(false)



  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {

      if (user ?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggenIn(true);


        dispatch(startLoadingNotes(user.uid))

      } else { setIsLoggenIn(false) }
      setChecking(false)


    })
  }, [dispatch, setChecking, setIsLoggenIn]);

  if (checking) { return (<JournalLoader />) }

  return (
    <Router>
      <Switch>
        <PublicRoutes path='/auth' component={AuthRouter} isAuthenticated={isLoggenIn} />
        <PrivateRoutes exact path='/' component={JournalScreem} isAuthenticated={isLoggenIn} />
        <Redirect to='/auth/login' />
      </Switch>
    </Router>
  )
}


import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { LoginScreem } from '../components/auth/LoginScreem';
import { RegisterScreem } from '../components/auth/RegisterScreem';


export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Switch>
          <Route path='/auth/login' component={LoginScreem} />
          <Route path='/auth/register' component={RegisterScreem} />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </div>
  )
}

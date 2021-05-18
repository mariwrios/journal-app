import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { starLoginEmailPassword, startGoogleLogin } from '../../actions/auth'


export const LoginScreem = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui)


  const { value, handleInputChange } = useForm({
    email: 'mari@gmail.com',
    password: '123456'
  })

  const { email, password } = value


  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(starLoginEmailPassword(email, password))
  }


  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form >
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          onChange={handleInputChange}
          autoComplete='off'
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          onChange={handleInputChange}
          autoComplete='off'
          value={password}
        />

        <button className={loading === true ? 'btn btn-disabled btn-block mt-5 mb-1' : 'btn btn-primary btn-block mt-5 mb-1'} disabled={loading} onClick={handleLogin}>
          Login
      </button>


        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text ">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to='/auth/register' className='link'>
          Create new account
          </Link>
      </form>
    </>
  )
}

import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import validator from "validator";
import { setError, removeError } from '../../actions/ui';
import { starRegisterWithEmailPasswordName } from '../../actions/auth';



export const RegisterScreem = () => {
  const dispatch = useDispatch()



  const { value, handleInputChange } = useForm({
    name: 'Maria',
    email: 'mari@gmail.com',
    password: '123456',
    password2: '123456'
  })

  const { name, email, password, password2 } = value



  const handleRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();

    (isFormValid()) && dispatch(starRegisterWithEmailPasswordName(email, password, name));

  }

  const isFormValid = () => {

    if (name.trim().length === 0) {

      dispatch(setError('Name is required'))
      return false;
    } else if (!validator.isEmail(email)) {

      dispatch(setError('Email is not valid'))
      return false
    } else if (password !== password2 || password.length < 5) {

      dispatch(setError('Password is not valid'))
      return false
    }


    dispatch(removeError()
    )
    return true

  }


  return (
    <>
      <h3 className='auth__title'>Register</h3>
      <form onSubmit={handleRegister}>



        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input mt-1'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input mt-1'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input mt-1'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Confirm password'
          name='password2'
          className='auth__input mt-1'
          autoComplete='off'
          value={password2}
          onChange={handleInputChange}
        />

        <button type='submit' className='btn btn-primary btn-block mb-5 mt-5' >
          Register
      </button>

        <Link to='/auth/login' className='link'>
          Already registered?
          </Link>
      </form>
    </>
  )
}

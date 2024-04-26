import { useEffect, useState } from 'react'
import cls from './AuthPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import icon from '../../../shared/assets/icons/df2bd37dd459024838acf761e0546619.png'
import icon2 from '../../../shared/assets/icons/icon2.png'
import icon3 from '../../../shared/assets/icons/icon3.png'
import { fetchUserLogin } from 'app/redux/store/reducers/ActionCreator'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'
import { userSlice } from 'app/redux/store/reducers/UserSlice'
const AuthPage = () => {

  const dispatch = useAppDispatch()
  const {user, error} = useAppSelector(state => state.userReducer)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [regDiv, setRegDiv] = useState(false)

  const login = (e: any) => { 
    e.preventDefault()
    const data = {
      username: email,
      password: password
    }
    dispatch(fetchUserLogin(data)).then(() => navigate('/home'))
    setTimeout(() => {
      setRegDiv(true)
    }, 2500)
    
    setTimeout(() => {
      setRegDiv(false)
    }, 5000)
    console.log('user:   ',user)
    console.log('error:   ',error)
  }

  const emailHandler = (email: string) => {
    setEmail(email)
  }

  const passwordHandler = (password: string) => {
    setPassword(password)
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const projects = JSON.parse(localStorage.getItem('projects') !== undefined ? localStorage.getItem('projects') : '[]')
    const teamleads =  !localStorage.getItem('teamleads') ?  JSON.parse(localStorage.getItem('teamleads') !== undefined ? localStorage.getItem('teamleads') : '[]') : null
    const programmers = !localStorage.getItem('programmers') ?  JSON.parse(localStorage.getItem('programmers') !== undefined ? localStorage.getItem('programmers') : '[]') : null
    if(user !== undefined && projects !== undefined && teamleads !== undefined || programmers !== undefined) {
      dispatch(userSlice.actions.userFetchingSuccess(user))
      dispatch(userSlice.actions.userProjectsFetchingSuccess(projects))
    }
  }, [])

  return (
    <div>
      <div style={{display: regDiv? 'block' : 'none', background: error.length ? 'red' :'rgb(13, 211, 72)'}} className={cls.reg}>{error.length ? `Ошибка: ${error}` : 'Успешно'}</div>
      <div className={cls.AuthPage}>
          <div className={cls.authForm}>
              <form >
              <p><img src={icon}/></p>
                <h1>Welcome</h1>
                
                <div className={cls.inputBox}>
                  <input value={email} onChange={e => emailHandler(e.target.value)} type='text' placeholder='Username'></input>
                </div>
                <div className={cls.inputBox}>
                  <input value={password} onChange={e => passwordHandler(e.target.value)} type='password' placeholder='Password'></input>
                </div>

                <button onClick={e => login(e)} className={cls.btn}>LOGIN</button>

                <h4>No account? <Link to={'/registration'}>Create one</Link> </h4>
                <h4>Do you want to <Link to={'/registration/manager'}>register a company</Link>?</h4>
              </form>
          </div>
      </div>
    </div>
  )
}

export default AuthPage
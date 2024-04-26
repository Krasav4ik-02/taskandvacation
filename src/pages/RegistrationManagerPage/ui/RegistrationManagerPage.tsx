import { Link } from 'react-router-dom'
import cls from './RegistrationManagerPage.module.scss'
import icon from '../../../shared/assets/icons/df2bd37dd459024838acf761e0546619.png'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'
import { fetchUserRegistrationManager } from 'app/redux/store/reducers/ActionCreator'

const RegistrationManagerPage = () => {
  const {registration: reg, registrationError} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nameCompany, setNameCompany] = useState('')
  const [bin, setBin] = useState('')

  const [regDiv, setRegDiv] = useState(false)

  const registration = (e: any) => {
    e.preventDefault()
    const data = {
      'username': username,
      'first_name':  firstName,
      'last_name': lastName,
      'password1':  password,
      'password2': confirmPassword,
      'name_company': nameCompany,
      'bin': Number(bin)
    }
    dispatch(fetchUserRegistrationManager(data)).then((data) => {
      console.log(data)
      setUsername('')
      setFirstName('')
      setLastName('')
      setPassword('')
      setConfirmPassword('')
      setNameCompany('')
      setBin('')
      setRegDiv(true)
    }).catch(() => setRegDiv(true))
    
    
    

    setTimeout(() => {
      setRegDiv(false)
    }, 5000)
  }

  return (
    <div>
      <div style={{display: regDiv? 'block' : 'none', background: registrationError.length ? 'red' :'rgb(13, 211, 72)'}} className={cls.reg}>{!registrationError  ? 'Успешно': `Ошибка: ${registrationError}`}</div>
      <div className={cls.RegistrationManagerPage}>
          <div className={cls.registrationForm}>
              <form >
                <p><img src={icon}/></p>
                <h1>Registration company</h1>
                <div className={cls.inputBox}>
                  <input value={username} onChange={e => setUsername(e.target.value)} type='text' placeholder='Username'></input>
                </div>
                <div className={cls.inputBox}>
                  <input value={firstName} onChange={e => setFirstName(e.target.value)} type='text' placeholder='First name'></input>
                </div>
                <div className={cls.inputBox}>
                  <input value={lastName} onChange={e => setLastName(e.target.value)} type='text' placeholder='Last name'></input>
                </div>
                <div className={cls.inputBox}>
                  <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password'></input>
                </div>
                <div className={cls.inputBox}>
                  <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder='Confirm password'></input>
                </div>
                <div className={cls.inputBox}>
                  <input value={nameCompany} onChange={e => setNameCompany(e.target.value)} type='text' placeholder='Company name'></input>
                </div>
                <div className={cls.inputBox}>
                  <input value={bin} onChange={e => setBin(e.target.value)} type='text' placeholder='BIN'></input>
                </div>

                <button onClick={e => registration(e)} className={cls.btn}>Submit</button>


                <h4>Already have an account?<Link to={'/auth'}>Log in</Link> </h4>
                {/* <h4>Do you want to <Link to={'/registration/manager'}>register a company</Link>?</h4> */}
              </form>
          </div>
      </div>
    </div>
  )
}

export default RegistrationManagerPage
import { Link } from 'react-router-dom'
import cls from './RegistrationPage.module.scss'
import icon from '../../../shared/assets/icons/df2bd37dd459024838acf761e0546619.png'
import { useEffect, useState } from 'react'
import { fetchUserRegistration } from 'app/redux/store/reducers/ActionCreator'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'

const RegistrationPage = () => {

  const {registration: reg, registrationError} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState(null)
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
      'role': role,
      'bin': bin
    }
    console.log(data)
    dispatch(fetchUserRegistration(data)).then((data) => {
      console.log(data)
      if(reg) {
        setUsername('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setConfirmPassword('')
        setRole(null)
        setBin('')
       
      }
      setRegDiv(true)
    }).catch(() => setRegDiv(true))
    
    

    setTimeout(() => {
      setRegDiv(false)
    }, 5000)
  }


  return (
    <div>
      <div style={{display: regDiv? 'block' : 'none', background: registrationError.length ? 'red' :'rgb(13, 211, 72)'}} className={cls.reg}>{!registrationError  ? 'Успешно': `Ошибка: ${registrationError}`}</div>
      <div className={cls.RegistrationPage}>
        <div className={cls.registrationForm}>
            <form >
            <p><img src={icon}/></p>
              <h1>Registration</h1>
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
              <select onChange={e => setRole(e.target.value)} value={role} className={cls.select}>
                <option value={null}>Select Role</option>
                <option value={1} >Manager</option>
                <option value={2}>Developer Junior</option>
                <option value={3}>Developer Middle</option>
                <option value={4}>Developer Senior</option>
                <option value={5}>Developer Teamlead</option>
                <option value={6}>Tester</option>
                <option value={7}>Analyst</option>
                <option value={8} >Main Analyst</option>
              </select>
              <div className={cls.inputBox}>
                <input value={bin} onChange={e => setBin(e.target.value)} type='text' placeholder='BIN'></input>
              </div>

              <button onClick={e => registration(e)} className={cls.btn}>Submit</button>


              <h4>Already have an account?<Link to={'/auth'}>Log in</Link> </h4>
              <h4>Do you want to <Link to={'/registration/manager'}>register a company</Link>?</h4>
            </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
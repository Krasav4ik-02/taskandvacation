import cls from './Navbar.module.scss'
import profile_icon from '../../../shared/assets/icons/profile.jpg'
import notice_icon from '../../../shared/assets/icons/notice.png'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/redux/hooks/redux'
import { url } from 'app/redux/store/reducers/ActionCreator'
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher'
import exit_icon from '../../../shared/assets/icons/exit.png'
import { userSlice } from 'app/redux/store/reducers/UserSlice'

export const Navbar = () => {
  const navigate = useNavigate()
  const {user} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  const exitHandler = () => {
    dispatch(userSlice.actions.userFetchingSuccess(undefined))
    dispatch(userSlice.actions.userProjectsFetchingSuccess([]))
    localStorage.clear()
  }

  return (
    <div className={cls.Navbar}>
        <input placeholder='Search'></input>
        
        <ThemeSwitcher/>
        <LangSwitcher/>
        <img className={cls.notice} src={notice_icon}/>
        <img onClick={() => navigate('/profile')} className={cls.profile} src={`${url}${user.ava_image}`}/>
        <img onClick={exitHandler} className={cls.exit} src={exit_icon} />
    </div>
    )
}

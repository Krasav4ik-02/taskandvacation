import cls from './Sidebar.module.scss'
import icon from '../../../shared/assets/icons/df2bd37dd459024838acf761e0546619.png'
import black_icon from '../../../shared/assets/icons/logo_black.png'
import circle from '../../../shared/assets/icons/circle.png'
import home_icon from '../../../shared/assets/icons/home-icon.png'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'app/redux/hooks/redux'
import { userSlice } from 'app/redux/store/reducers/UserSlice'
import { useNavigate } from 'react-router-dom'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
// import { classNames } from 'shared/lib/classNames/classNames'

export const Sidebar = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [selected, setSelected] = useState(1)
    const {theme} = useTheme()
    const {t} = useTranslation()

    const toggleSelected = (id: number) => {
      setSelected(id)
    } 

    const exitHandler = () => {
      dispatch(userSlice.actions.userFetchingSuccess(undefined))
      dispatch(userSlice.actions.userProjectsFetchingSuccess([]))
      localStorage.clear()
    }

  return (
    <div className={cls.Sidebar} id='Sidebar'>
      {/* <div style={{position: 'fixed'}}> */}
        <img src={theme == Theme.DARK ? icon : black_icon}/>
        <div onClick={() => {toggleSelected(1), navigate('/home')} } className={`${cls.layer} ${selected == 1 ? cls.selectedLayer : ''}`}><i><img src={home_icon}/></i> { t('Projects/Tasks') }  </div>
        <div onClick={() => toggleSelected(2)}  className={`${cls.layer} ${selected == 2 ? cls.selectedLayer : ''}`}><i><img style={{width: '18px'}} src={circle}/></i> { t('In progress') } </div>
        <div onClick={() => toggleSelected(3)}  className={`${cls.layer} ${selected == 3 ? cls.selectedLayer : ''}`}><i><img style={{width: '18px'}} src={circle}/></i>  { t('Tasks sent for review') }</div>
        <div onClick={() => toggleSelected(4)}  className={`${cls.layer} ${selected == 4 ? cls.selectedLayer : ''}`}><i><img style={{width: '18px'}} src={circle}/></i>  { t('Completed') }</div>
        <div onClick={() => toggleSelected(5)}  className={`${cls.layer} ${selected == 5 ? cls.selectedLayer : ''}`}><i><img style={{width: '18px'}} src={circle}/></i> { t('Overdue') }</div>
        <div onClick={() => {toggleSelected(6), navigate('/statistics')}}  className={`${cls.layer} ${selected == 6 ? cls.selectedLayer : ''}`}><i><img style={{width: '18px'}} src={circle}/></i> { t('Statistics') }</div>
        <div onClick={() => {toggleSelected(7), navigate('/vacation')}}  className={`${cls.layer} ${selected == 7 ? cls.selectedLayer : ''}`}><i><img style={{width: '18px'}} src={circle}/></i> { t('Vacation') }</div>
        {/* <div className={cls.layers}>sidebar</div>
        <div className={cls.layers}>sidebar</div>
        <div className={cls.layers}>sidebar</div> */}
        {/* <LangSwitcher/> */}
        {/* <div><Button onClick={exitHandler} className={cls.btn}>Exit</Button></div> */}
        {/* </div> */}
    </div>
  )
}

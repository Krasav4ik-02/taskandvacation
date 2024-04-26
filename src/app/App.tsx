// import React from 'react'

import { Suspense, useEffect, useState } from "react"
import { AppRouter } from "./providers/router"
import { Link } from "react-router-dom"
import './styles/index.scss'
import { useAppDispatch, useAppSelector } from "./redux/hooks/redux"
import { fetchUserLogin } from "./redux/store/reducers/ActionCreator"
import { useSelector } from "react-redux"
import { RootState } from "./redux/store/store"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "./providers/ThemeProvider"

const App = () => {
  const {theme} = useTheme()
  // localStorage.setItem('theme', 'light')
  return (
    <div className={classNames('app', {}, [theme])}>
        <Suspense>
            
            {/* <Link to={'/auth'}>Auth</Link>
            <Link to={'/registration'}>/registration</Link>
            <Link to={'/registration/manager/'}>/registration/manager/</Link> */}
              <AppRouter/>
            
        </Suspense>
    </div>
  )
}

export default App
import { useTheme } from "app/providers/ThemeProvider"
import { Button } from "../Button/Button"
import { classNames } from "shared/lib/classNames/classNames"
import Light_icon from '../../../shared/assets/icons/Light_Icon.svg'
import Dark_icon from '../../../shared/assets/icons/Dark_Icon.svg'
import { Theme } from "app/providers/ThemeProvider"
import cls from './ThemeSwitcher.module.scss'
import dark from '../../../shared/assets/icons/dark.png'
import light from '../../../shared/assets/icons/light.png'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()

  return (
    <Button 
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
    >
        {/* <div className={cls.svg}>{theme == Theme.DARK ? <Dark_icon/> : <Light_icon/>}</div> */}
        <div className={cls.svg}>{theme == Theme.DARK ? <img src={dark}/> : <img src={light}/>}</div>
    </Button>
  )
}

export default ThemeSwitcher
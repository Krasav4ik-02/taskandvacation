import { useTranslation } from "react-i18next"
import { Button } from "../Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import lang_icon from '../../assets/icons/icons8-глобус-90.png'
import { useState } from "react";

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()
    const [visible, setVisible] = useState(false)

    const toggle = (lang: string) => {
        i18n.changeLanguage(i18n.language = lang);
        setVisible(prev => !prev)
    };

  return (
        // <Button
        //     className={classNames(cls.LangSwitcher, {}, [className])}
        //     onClick={toggle}
        // >
        //     {t('Язык')}
        // </Button>
        <div 
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            <img onClick={() => setVisible(prev => !prev)} src={lang_icon}/>
            <div className={cls.dropdown} style={{display: visible ? 'block' : 'none'}}>
                <div onClick={() => toggle('en')} className={classNames(cls.slice, {[cls.selected]: i18n.language === 'en'}, [])}>English</div>
                <div onClick={() => toggle('kz')} className={classNames(cls.slice, {[cls.selected]: i18n.language === 'kz'}, [])}>Kazakh</div>
            </div>
        </div>
    )
}

export default LangSwitcher
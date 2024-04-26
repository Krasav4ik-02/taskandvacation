import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props

  return (
    <button
        type='button'
        className={classNames(cls.Button, {}, [className])}
        {...otherProps}
    >
        {children}
    </button>
  )
}

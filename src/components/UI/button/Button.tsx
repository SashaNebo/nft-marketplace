import { FC } from 'react'
import clsx from 'clsx'

import cn from './Button.module.scss'
import { ButtonProps } from './ButtonType'
import { spritePath } from '../../../helpers/imgPath'

const Button: FC<ButtonProps> = ({ text, type, size, icon, className, onClick, disabled }) => {
  const buttonStyles = clsx(
    className,
    cn.button,
    {
      primary: cn.primary,
      secondary: cn.secondary,
    }[type],

    {
      xl: cn.xl,
      lg: cn.lg,
      md: cn.md,
    }[size]
  )

  const iconStyles = clsx(
    cn.icon,
    {
      primary: cn['primary-i'],
      secondary: cn['secondary-i'],
    }[type]
  )

  return (
    <button disabled={disabled} onClick={onClick} className={buttonStyles}>
      {icon && (
        <svg className={iconStyles}>
          <use href={`${spritePath}#${icon}`}></use>
        </svg>
      )}
      {text}
    </button>
  )
}

export default Button

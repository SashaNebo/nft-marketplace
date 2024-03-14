import { FC } from 'react'
import clsx from 'clsx'

import cn from './Button.module.scss'
import { spritePath } from '../../../helpers/imgPath'
import { BUTTON_BTN } from './buttonType'

const Button: FC<BUTTON_BTN> = (props) => {
  const { text, variant, size, icon, className, ...restProps } = props
  const buttonStyles = clsx(
    className,
    cn.button,
    {
      primary: cn.primary,
      secondary: cn.secondary,
    }[variant],

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
    }[variant]
  )

  return (
    <button className={buttonStyles} {...restProps}>
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

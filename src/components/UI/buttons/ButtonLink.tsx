import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import cn from './Button.module.scss'
import { spritePath } from '../../../helpers/imgPath'
import { BUTTON_LINK } from './buttonType'

const ButtonLink: FC<BUTTON_LINK> = (props) => {
  const { to, variant, size, text, icon, className, ...restProps } = props

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
    <Link to={to} className={buttonStyles} {...restProps}>
      {icon && (
        <svg className={iconStyles}>
          <use href={`${spritePath}#${icon}`}></use>
        </svg>
      )}

      {text}
    </Link>
  )
}

export { ButtonLink }

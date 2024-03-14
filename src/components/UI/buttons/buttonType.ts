import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

type BUTTON = {
  variant: 'primary' | 'secondary'
  size: 'xl' | 'lg' | 'md'
  text: string
  icon?: string 
  className?: string
}

export type BUTTON_BTN = BUTTON & ButtonHTMLAttributes<HTMLButtonElement>
export type BUTTON_LINK = BUTTON & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

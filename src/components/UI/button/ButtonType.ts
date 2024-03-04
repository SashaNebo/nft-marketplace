export type ButtonProps = {
  type: ButtonType
  size: ButtonSize
  text: string
  icon?: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

type ButtonType = 'primary' | 'secondary'
type ButtonSize = 'xl' | 'lg' | 'md'

import { FC } from 'react'

import cn from './InputField.module.scss'
import { spritePath } from '../../../helpers/imgPath'
import { INPUT } from './inputType';

const InputField: FC<INPUT> = ({ register, errorMessage, leftIcon, rightIcon, showPassword, ...inputProps }) => {

  return (
    <fieldset className={cn['fieldset']}>
      <legend
        className={[cn['fieldset__legend'], errorMessage && cn['fieldset__legend_show']].join(' ')}>
        {errorMessage && String(errorMessage)}
      </legend>

      <div className={cn['input-box']}>
        <div className={cn['input-group']}>
          
          {leftIcon && (
            <svg className={cn['icon']}>
              <use href={`${spritePath}#${leftIcon}`}></use>
            </svg>
          )}

          <input className={cn['input-line']} {...register} {...inputProps} />

          {rightIcon && (
            <svg onClick={showPassword} className={[cn['icon'], cn['icon-right']].join(' ')}>
              <use href={`${spritePath}#${rightIcon}`}></use>
            </svg>
          )}
        </div>
      </div>
    </fieldset>
  )
}

export { InputField }
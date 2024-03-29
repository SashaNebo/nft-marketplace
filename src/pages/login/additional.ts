import { FieldErrors, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'
import { INPUT } from '../../components/UI/input/inputType'
import { FORM_LOGIN } from '../../types/accountTypes/accountTypes'

type REGISTER_FIELDS = {
  registerEmail: UseFormRegisterReturn<string>
  registerPassword: UseFormRegisterReturn<string>
}

type INPUT_FIELDS = {
  inputEmail: INPUT
  inputPassword: INPUT
}

const createInputFields = (
  register: UseFormRegister<FORM_LOGIN>,
  errors: FieldErrors<FORM_LOGIN>
): INPUT_FIELDS => {
  const registerFields = createRegisterFields(register)

  return {
    inputEmail: {
      register: registerFields.registerEmail,
      errorMessage: errors?.email?.message,
      leftIcon: 'message',
      type: 'email',
      placeholder: 'Email Address',
    },

    inputPassword: {
      register: registerFields.registerPassword,
      errorMessage: errors?.password?.message,
      leftIcon: 'lockKey',
      type: 'password',
      placeholder: 'Password',
    },
  }
}

const createRegisterFields = (register: UseFormRegister<FORM_LOGIN>): REGISTER_FIELDS => ({
  registerEmail: register('email', {
    required: 'Required field',
  }),
  registerPassword: register('password', {
    required: 'Required field',
    minLength: { value: 8, message: 'Min 8 symbol' },
  }),
})

export type PASSWORD_PROPS = {
  type: 'text' | 'password'
  rightIcon: 'eye' | 'eyeSlash'
}

const initialLockState: PASSWORD_PROPS = {
  type: 'password',
  rightIcon: 'eyeSlash',
}

export { createInputFields, initialLockState }

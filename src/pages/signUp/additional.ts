import { FieldErrors, UseFormRegister, UseFormRegisterReturn, UseFormWatch } from 'react-hook-form'
import { INPUT } from '../../components/UI/input/inputType'
import { FORM_SIGN_UP } from '../../types/accountTypes/accountTypes'

// SIGN UP

type REGISTER_FIELDS = {
  registerUserName: UseFormRegisterReturn<string>
  registerEmail: UseFormRegisterReturn<string>
  registerPassword: UseFormRegisterReturn<string>
  registerConfirmPassword: UseFormRegisterReturn<string>
}

type INPUT_FIELDS = {
  inputUserName: INPUT
  inputEmail: INPUT
  inputPassword: INPUT
  inputConfirmPassword: INPUT
}

const createInputFields = (
  register: UseFormRegister<FORM_SIGN_UP>,
  watch: UseFormWatch<FORM_SIGN_UP>,
  errors: FieldErrors<FORM_SIGN_UP>
): INPUT_FIELDS => {
  const registerFields = createRegisterFields(register, watch)

  return {
    inputUserName: {
      register: registerFields.registerUserName,
      errorMessage: errors?.userName?.message,
      leftIcon: 'user',
      type: 'text',
      placeholder: 'Username',
    },

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

    inputConfirmPassword: {
      register: registerFields.registerConfirmPassword,
      errorMessage: errors.confirmPassword?.message,
      leftIcon: 'lockKey',
      type: 'password',
      placeholder: 'Confirm Password',
    },
  }
}

const createRegisterFields = (
  register: UseFormRegister<FORM_SIGN_UP>,
  watch: UseFormWatch<FORM_SIGN_UP>
): REGISTER_FIELDS => ({
  registerUserName: register('userName', {
    required: 'Required field',
    minLength: { value: 4, message: 'Min 4 symbol' },
    maxLength: { value: 20, message: 'Max 20 symbol' },
  }),

  registerEmail: register('email', {
    required: 'Required field',
  }),

  registerPassword: register('password', {
    required: 'Required field',
    minLength: { value: 1, message: 'Min 8 symbol' },
  }),

  registerConfirmPassword: register('confirmPassword', {
    required: 'Required field',
    validate: () => {
      return watch('password') !== watch('confirmPassword') ? 'Invalid confirm password' : true
    },
  }),
})

export type PASSWORD_PROPS = {
  type: 'text' | 'password'
  rightIcon: 'eye' | 'eyeSlash'
}

export type LOCK_STATE = {
  passwordProps: PASSWORD_PROPS
  confirmPasswordProps: PASSWORD_PROPS
}

const initialLockState: LOCK_STATE = {
  passwordProps: { type: 'password', rightIcon: 'eyeSlash' },
  confirmPasswordProps: { type: 'password', rightIcon: 'eyeSlash' },
}

type SET_LOCK = React.Dispatch<React.SetStateAction<LOCK_STATE>>
type PASSWORD_ID = 'password' | 'confirmPassword'

const changePasswordVisible = (lock: LOCK_STATE, setLock: SET_LOCK) => {
  return (id: PASSWORD_ID) => {
    if (id === 'password') {
      lock.passwordProps.type === 'password'
        ? setLock(prevLock => ({
            ...prevLock,
            passwordProps: { type: 'text', rightIcon: 'eye' },
          }))
        : setLock(prevLock => ({
            ...prevLock,
            passwordProps: { type: 'password', rightIcon: 'eyeSlash' },
          }))
    }

    if (id === 'confirmPassword') {
      lock.confirmPasswordProps.type === 'password'
        ? setLock(prevLock => ({
            ...prevLock,
            confirmPasswordProps: { type: 'text', rightIcon: 'eye' },
          }))
        : setLock(prevLock => ({
            ...prevLock,
            confirmPasswordProps: { type: 'password', rightIcon: 'eyeSlash' },
          }))
    }
  }
}

export { createInputFields, initialLockState, changePasswordVisible }

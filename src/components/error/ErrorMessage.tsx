import { FC } from 'react'

const ErrorMessage: FC<{ errorMessage: string }> = ({ errorMessage }) => {
  return (
    <div>
      <h1 className='text-work-h3'>Error</h1>
      <p className='text-work-body'>
        We couldn't fetch list entries at that moment. {errorMessage}
      </p>
    </div>
  )
}

export default ErrorMessage

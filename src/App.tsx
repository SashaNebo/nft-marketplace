import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './components/appRouter/AppRouter'
import { Provider } from 'react-redux'
import store from './store/store'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  )
}

export default App

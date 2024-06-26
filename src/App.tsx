import { Provider } from 'react-redux'

import { Router } from '@/router/router'
import { store } from '@/services/store'

import './assets/reset.css'
import './assets/style.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App

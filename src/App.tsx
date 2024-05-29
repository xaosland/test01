import { Provider } from 'react-redux'

import { Router } from '@/service/router'
import store from '@/service/store'

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

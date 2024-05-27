import { Provider } from 'react-redux'

import './assets/reset.css'
import './assets/style.css'

import { Routes } from './service/routes.tsx'
import store from './service/store.ts'

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  )
}

export default App

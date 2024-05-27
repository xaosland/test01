import { Provider } from 'react-redux'

import { Routes } from '@/service/routes.tsx'
import store from '@/service/store.ts'

import './assets/reset.css'
import './assets/style.css'

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

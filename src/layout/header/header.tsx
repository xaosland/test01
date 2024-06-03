import { Link } from 'react-router-dom'

import { Button } from '@mui/material'

// @ts-ignore
import s from './header.module.css'
export const Header = () => {
  const handleClick = () => {
    document.body.classList.toggle('dark')
  }

  return (
    <header className={s.header}>
      <div className={s.menu}>
        <Link to={'/'}>
          <img
            className={s.logo}
            src={
              'https://images.squarespace-cdn.com/content/v1/5f40d30c876c3361a606610c/1612097846944-U74VD948771CA2PHFSAT/sketch-2-logo-png-transparent.png'
            }
          />
        </Link>
        <button onClick={handleClick}>DIAMOND</button>
        <div className={s.buttonHeader}>
          <Link to={'/login'}>
            {' '}
            <Button color={'primary'} variant={'contained'}>
              Войти
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

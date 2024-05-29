import { Link } from 'react-router-dom'

import s from '@/layout/layout.module.css'
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>LOGO</div>
      <div className={s.menu}>
        <ul>
          <li>
            <Link to={'/'}>HOME</Link>
          </li>
          <li>
            <Link to={'/table'}>DOCUMENTS</Link>
          </li>
          <li>
            <Link to={'/login'}>LOGIN</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

import { Page } from '@/components/page/page'
import { Button } from '@mui/material'

export const NotFound = () => {
  return (
    <Page>
      <div className={'container'}>
        <h1>404</h1>
        <p>
          Извините, но по вашему запросу мы не смогли найти страницу, которую вы ищете. Возможно,
          она была перемещена или удалена.
        </p>
        <p>Мы рекомендуем воспользоваться следующими опциями:</p>
        <ul>
          <li>Проверьте URL: Убедитесь, что адрес введите правильно. Может быть, есть опечатка?</li>
          <li>
            Используйте функцию поиска: Если вы знаете, о чем идет речь, попробуйте использовать наш
            поиск сайта.
          </li>
          <li>
            Перейдите на главную страницу: Вернитесь на главную страницу нашего сайта и посмотрите,
            может быть, там находится то, что вам нужно.
          </li>
          <li>
            Свяжитесь с нами: Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нашей
            службой поддержки.
          </li>
        </ul>
        <p>
          Мы ценим ваше время и стремимся предоставить вам наиболее полезную информацию как можно
          скорее. Спасибо за понимание!
        </p>
        <Link to={'/'}>
          <Button variant={'contained'}>Вернуться на главную</Button>
        </Link>
      </div>
    </Page>
  )
}
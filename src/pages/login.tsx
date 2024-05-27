import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, TextField, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import { useLoginMutation } from '../service/api.ts'

export function Login() {
  const [login, { isLoading }] = useLoginMutation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await login({ password, username }).unwrap()
      const token = response.data.token

      if (token) {
        localStorage.setItem('token', token)
        navigate('/')
      } else {
        setErrorMessage('Invalid response or missing token field')
      }
    } catch (error) {
      setErrorMessage('Invalid response or missing token field')
    }
  }

  if (isLoading) {
    return (
      <div className={'card'}>
        <CircularProgress color={'secondary'} />
      </div>
    )
  }

  return (
    <div className={'login_page'}>
      <div className={'login_form'}>
        {errorMessage && (
          <Typography color={'error'} variant={'body1'}>
            {errorMessage}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <div className={'textfield'}>
            <div>
              <TextField
                fullWidth
                label={'Username'}
                onChange={e => setUsername(e.target.value)}
                variant={'outlined'}
              />
            </div>

            <div>
              <TextField
                fullWidth
                label={'Password'}
                onChange={e => setPassword(e.target.value)}
                type={'password'}
                variant={'outlined'}
              />
            </div>
          </div>
          <div className={'mybutton'}>
            <Button fullWidth type={'submit'} variant={'contained'}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

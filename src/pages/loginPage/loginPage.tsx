import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { regexName } from '@/common/const/regex'
import { Page } from '@/components/page/page'
import { FormValues } from '@/types/formValues'
import { Button, TextField } from '@mui/material'

// @ts-ignore
import s from './login.module.css'
export const LoginPage = () => {
  const navigate = useNavigate()
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    try {
      navigate('/')
    } catch (error) {
      alert('Ошибка при входе в систему. Попробуйте еще раз.')
    }
  }

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.textfieldSection}>
          <TextField
            error={!!errors.username}
            fullWidth
            {...register('username', {
              pattern: { message: 'Invalid user name', value: regexName },
              required: 'UserName is required',
            })}
            label={errors.username ? errors.username.message : 'UserName'}
          />
          <TextField
            error={!!errors.password}
            fullWidth
            label={errors.password ? errors.password.message : 'Password'}
            type={'password'}
            {...register('password', {
              required: 'Password is required',
              validate: value => value === 'password' || 'Password: "password"',
            })}
          />
        </div>
        <div className={s.buttonSection}>
          <Button fullWidth type={'submit'} variant={'contained'}>
            Submit
          </Button>
        </div>
      </form>
    </Page>
  )
}

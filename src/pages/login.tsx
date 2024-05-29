import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useLoginMutation } from '@/service/auth.service'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

type FormValues = {
  password: string
  username: string
}
const regex = /^user\d{1,2}$/

export const LoginForm = () => {
  const [login] = useLoginMutation() // Использование хука useLoginMutation
  const navigate = useNavigate() // Использование хука useNavigate для пере
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await login(data).unwrap() // Вызов мутации login с данными формы

      navigate('/')
    } catch (error) {}
  }

  return (
    <div className={'login_page'}>
      <div className={'login_form'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={'textfield'}>
            <TextField
              error={!!errors.username}
              fullWidth
              label={'Error'}
              {...register('username', {
                pattern: { message: 'Invalid user name', value: regex },
                required: 'UserName is required',
              })}
              label={errors.username ? errors.username.message : 'UserName'}
            />
            <TextField
              error={!!errors.password}
              fullWidth
              laberl={errors.password ? errors.password.message : 'Password'}
              type={'password'}
              {...register('password', {
                minLength: { message: 'Password has to be Password', value: 3 },
                required: 'Password is required',
              })}
              label={'password'}
            />
          </div>
          <Button fullWidth type={'submit'} variant={'contained'}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

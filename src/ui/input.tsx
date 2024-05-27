import { ChangeEvent, useState } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputLabel, OutlinedInput } from '@mui/material'

type InputProps = {
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  password?: boolean
  type: string
  value: string
}
export const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant={'outlined'}>
        <InputLabel>{props.label}</InputLabel>
        <OutlinedInput
          endAdornment={
            props.password ? (
              <IconButton
                aria-label={'toggle password visibility'}
                edge={'end'}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ) : (
              ''
            )
          }
          label={'Password'}
          type={showPassword ? 'text' : `${props.type}`}
        />
      </FormControl>
    </div>
  )
}

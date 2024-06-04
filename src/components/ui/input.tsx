import TextField from '@mui/material/TextField'

export type TextFieldProps = {
  value: string
}
export const MyTextField = ({ value }: TextFieldProps) => {
  return <TextField value={value} />
}

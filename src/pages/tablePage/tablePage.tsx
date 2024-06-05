import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Page } from '@/components/page/page'
import { TableComponent } from '@/components/table/tableComponent'
import { ControlledInput } from '@/components/ui/controlledInput'
import {
  useCreateDecksMutation,
  useDelDecksMutation,
  useGetDecksQuery,
  useUpdateDecksMutation,
} from '@/services/table/tabel.service'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress'
import TextField from '@mui/material/TextField'

// @ts-ignore
import s from './tablePage.module.css'
export const TablePage = () => {
  const [search, setSearch] = useState('')

  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })

  const { control, handleSubmit } = useForm<{ name: string }>({
    defaultValues: {
      name: '',
    },
  })

  const [createDeck] = useCreateDecksMutation()

  const onSubmit = handleSubmit(data => {
    createDeck(data)
  })

  const [updateDeck] = useUpdateDecksMutation()
  const [deleteDeck] = useDelDecksMutation()

  return (
    <Page>
      {isLoading && <CircularProgress />}
      {error && <p>{JSON.stringify(error)}</p>}
      <TextField
        className={s.tablePage}
        fullWidth
        onChange={e => setSearch(e.currentTarget.value)}
        placeholder={'Поиск'}
        value={search}
      />
      <br />

      <p />
      <form onSubmit={onSubmit}>
        <ControlledInput control={control} label={'new deck name'} name={'name'} />
        <button>create deck</button>
      </form>
      <p />
      <TableComponent
        data={data?.items}
        onDeleteClick={id => {
          deleteDeck({ id })
        }}
        onEditClick={id => {
          updateDeck({ id, name: 'new name2' })
        }}
      />
    </Page>
  )
}

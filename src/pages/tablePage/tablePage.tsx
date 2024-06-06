import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Modal } from '@/components/modal/modal'
import { Page } from '@/components/page/page'
import { TableComponent } from '@/components/table/tableComponent'
import { ControlledInput } from '@/components/ui/controlledInput'
import {
  useCreateDecksMutation,
  useDelDecksMutation,
  useGetDecksQuery,
  useUpdateDecksMutation,
} from '@/services/table/decks.services'
import Button from '@mui/material/Button'
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

  const [modalActive, setModalActive] = useState(false)

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
      <button onClick={() => setModalActive(true)}>NEW DECK</button>
      <Modal active={modalActive} setActive={setModalActive}>
        ss
      </Modal>
      <form onSubmit={onSubmit}>
        <ControlledInput control={control} fullWidth label={'new deck name'} name={'name'} />
        <p />
        <Button fullWidth variant={'contained'}>
          create deck
        </Button>
      </form>
      <p />

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

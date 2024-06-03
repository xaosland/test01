import React, { useState } from 'react'

import { Page } from '@/components/page/page'
import { TableComponent } from '@/components/table/tableComponent'
import { useGetDecksQuery } from '@/service/table/tabel.service'
import { Button, CircularProgress, TextField } from '@mui/material'

// @ts-ignore
import s from './tablePage.module.css'
export const TablePage = () => {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })

  if (isLoading) {
    return (
      <Page>
        <CircularProgress />
      </Page>
    )
  }
  if (error) {
    return <Page>Error: {JSON.stringify(error)}</Page>
  }

  return (
    <Page>
      <TextField
        className={s.tablePage}
        fullWidth
        onChange={e => setSearch(e.currentTarget.value)}
        placeholder={'Поиск'}
        value={search}
      />
      <br />
      <Button fullWidth variant={'contained'}>
        Add Card
      </Button>
      <TableComponent data={data} search={search} />
    </Page>
  )
}

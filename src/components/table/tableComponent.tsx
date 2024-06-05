import { Deck } from '@/types/table.type'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

type TableUiProps = {
  data: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
}
export const TableComponent = ({ data, onDeleteClick, onEditClick }: TableUiProps) => {
  const formatDate = (dateString: Date | number | string) => {
    const date = new Date(dateString)

    return date.toLocaleDateString('ru-RU')
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>Name</TableCell>
            <TableCell align={'center'}>Cards</TableCell>
            <TableCell align={'center'}>Last Updated</TableCell>
            <TableCell align={'center'}>Created By</TableCell>
            <TableCell align={'center'}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(deck => (
            <TableRow key={deck.id}>
              <TableCell component={'th'} scope={'row'}>
                {deck.name}
              </TableCell>
              <TableCell align={'center'}>{deck.cardsCount}</TableCell>
              <TableCell align={'center'}>{formatDate(deck.updated)}</TableCell>
              <TableCell align={'center'}>{deck.author.name}</TableCell>
              <TableCell align={'center'}>
                <button
                  onClick={() => {
                    onEditClick(deck.id)
                  }}
                >
                  EDIT
                </button>{' '}
                /{' '}
                <button
                  onClick={() => {
                    onDeleteClick(deck.id)
                  }}
                >
                  DELETE
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

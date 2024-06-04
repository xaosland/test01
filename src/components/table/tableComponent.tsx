import { Deck } from '@/types/table.type'
import {
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
  search: string
}
export const TableComponent = ({ data }: TableUiProps) => {
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
              <TableCell align={'center'}>EDIT / DELETE </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

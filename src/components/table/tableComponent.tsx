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
  data: any
  search: string
}
export const TableComponent = ({ data }: TableUiProps) => {
  const formatDate = dateString => {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(deck => (
            <TableRow key={deck.id}>
              <TableCell component={'th'} scope={'row'}>
                {deck.name}
              </TableCell>
              <TableCell align={'center'}>{deck.cardsCount}</TableCell>
              <TableCell align={'center'}>{formatDate(deck.updated)}</TableCell>
              <TableCell align={'center'}>{deck.author.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

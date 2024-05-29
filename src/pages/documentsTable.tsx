import { useGetDocumentsQuery } from '@/service/document.service'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

import s from '@/pages/documents.module.css'
const columns: GridColDef<[number]>[] = [
  { field: 'companySigDate', headerName: 'дата регистрации компании', width: 110 },
  { field: 'companySignatureName', headerName: 'название подписи компании', width: 150 },
  { field: 'documentName', headerName: 'название документа', width: 150 },
  { field: 'documentStatus', headerName: 'статус документа', width: 110 },
  { field: 'documentType', headerName: 'тип документа', width: 150 },
  { field: 'employeeNumber', headerName: 'номер сотрудника', width: 160 },
  { field: 'employeeSigDate', headerName: 'дата подписания сотрудником контракта', width: 160 },
  { field: 'employeeSignatureName', headerName: 'Подпись сотрудника', width: 160 },
]

export const DocumentsTable = () => {
  const { data } = useGetDocumentsQuery()

  return (
    <div className={s.main_table}>
      <div className={s.table_title}>
        <DataGrid
          checkboxSelection
          columns={columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          rows={data.data}
        />
      </div>
    </div>
  )
}

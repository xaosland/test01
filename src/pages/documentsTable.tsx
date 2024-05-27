import { EditableSpan } from '@/pages/edit'
import {
  useDeleteDocumentMutation,
  useGetDocumentsQuery,
  useUpdateDocumentMutation,
} from '@/service/api'
import Button from '@mui/material/Button'

export function DocumentsTable() {
  const { data, error, isLoading } = useGetDocumentsQuery()
  const [deleteDocument] = useDeleteDocumentMutation()
  const [updateDocument] = useUpdateDocumentMutation()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: Error</p>
  }

  if (!data) {
    return <p>No data available</p>
  }

  const handleDeleteDocument = (documentID: string) => {
    deleteDocument(documentID)
  }

  const handleEditDocument = (documentID: string, field: string, value: string) => {
    const documentIndex = data.data.findIndex(document => document.id === documentID)
    const updatedDocument = { ...data.data[documentIndex], [field]: value }
    const json = JSON.stringify(updatedDocument)

    updateDocument({ data: JSON.parse(json), id: documentID })
  }

  return (
    <div className={'table_page'}>
      <div className={'card-header'}>
        DoubleClick to edit 🥰🥰
        <table>
          <thead>
            <tr>
              <th>дата регистрации компании</th>
              <th>название компании</th>
              <th>название документа</th>
              <th>статус документа</th>
              <th>тип документа</th>
              <th>номер сотрудника</th>
              <th>дата подписания сотрудником</th>
              <th>подпись сотрудника</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.data.map(document => (
              <tr key={document.id}>
                <td>{document.companySigDate}</td>
                <td>
                  <EditableSpan
                    document={document}
                    field={'companySignatureName'}
                    onChange={handleEditDocument}
                  />
                </td>
                <td>
                  <EditableSpan
                    document={document}
                    field={'documentName'}
                    onChange={handleEditDocument}
                  />
                </td>
                <td>
                  <EditableSpan
                    document={document}
                    field={'documentStatus'}
                    onChange={handleEditDocument}
                  />
                </td>
                <td>
                  <EditableSpan
                    document={document}
                    field={'documentType'}
                    onChange={handleEditDocument}
                  />
                </td>
                <td>
                  <EditableSpan
                    document={document}
                    field={'employeeNumber'}
                    onChange={handleEditDocument}
                  />
                </td>
                <td>
                  <EditableSpan
                    document={document}
                    field={'employeeSigDate'}
                    onChange={handleEditDocument}
                  />
                </td>
                <td>
                  <EditableSpan
                    document={document}
                    field={'employeeSignatureName'}
                    onChange={handleEditDocument}
                  />
                </td>
                <td>
                  <Button onClick={() => handleDeleteDocument(document.id)}>Удалить</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

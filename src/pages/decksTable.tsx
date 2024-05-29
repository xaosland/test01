import { GetDocumentsResponse } from '@/service/documents.type'

type DecksTableProps = {
  data?: GetDocumentsResponse
}
export const DecksTable = ({ data, ...rest }: DecksTableProps) => {
  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название документа</th>
            <th>Статус документа</th>
            <th>Тип документа</th>
            <th>Дата подписания компании</th>
            <th>Имя подписанта компании</th>
            <th>Дата подписания сотрудника</th>
            <th>Имя подписанта сотрудника</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map(doc => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.documentName}</td>
              <td>{doc.documentStatus}</td>
              <td>{doc.documentType}</td>
              <td>{doc.companySigDate}</td>
              <td>{doc.companySignatureName}</td>
              <td>{doc.employeeSigDate}</td>
              <td>{doc.employeeSignatureName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

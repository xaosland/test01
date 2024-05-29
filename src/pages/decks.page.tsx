import { DecksTable } from '@/pages/decksTable'
import { useGetDocumentsQuery } from '@/service/document.service'

export function DecksPage() {
  const { data, error, isLoading } = useGetDocumentsQuery()

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return <DecksTable data={data} />
}

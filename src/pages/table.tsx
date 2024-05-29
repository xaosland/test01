// import * as React from 'react'
// import { useEffect, useState } from 'react'
//
// import { useDeleteDocumentMutation, useGetDocumentsQuery } from '@/service/document.service'
// import { GetDocumentsResponse } from '@/service/documents.type'
// import AddIcon from '@mui/icons-material/Add'
// import CancelIcon from '@mui/icons-material/Close'
// import DeleteIcon from '@mui/icons-material/DeleteOutlined'
// import EditIcon from '@mui/icons-material/Edit'
// import SaveIcon from '@mui/icons-material/Save'
// import Button from '@mui/material/Button'
// import {
//   DataGrid,
//   GridActionsCellItem,
//   GridColDef,
//   GridEventListener,
//   GridRowEditStopReasons,
//   GridRowId,
//   GridRowModel,
//   GridRowModes,
//   GridRowModesModel,
//   GridRowsProp,
//   GridSlots,
//   GridToolbarContainer,
// } from '@mui/x-data-grid'
// import { randomArrayItem, randomId } from '@mui/x-data-grid-generator'
//
// import s from '@/pages/documents.module.css'
//
// interface EditToolbarProps {
//   setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void
//   setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void
// }
//
// function EditToolbar(props: EditToolbarProps) {
//   const { setRowModesModel, setRows } = props
//
//   const handleClick = () => {
//     const id = randomId()
//
//     setRows(oldRows => [...oldRows, { age: '', id, isNew: true, name: '' }])
//     setRowModesModel(oldModel => ({
//       ...oldModel,
//       [id]: { fieldToFocus: 'name', mode: GridRowModes.Edit },
//     }))
//   }
//
//   return (
//     <GridToolbarContainer>
//       <Button color={'primary'} onClick={handleClick} startIcon={<AddIcon />}>
//         Add record
//       </Button>
//     </GridToolbarContainer>
//   )
// }
//
// export default function FullFeaturedCrudGrid() {
//   const [rows, setRows] = useState([])
//   const { data: documents } = useGetDocumentsQuery()
//   const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({})
//
//   React.useEffect(() => {
//     if (documents) {
//       setRows(documents.data)
//     }
//   }, [documents])
//   const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true
//     }
//   }
//
//   const handleEditClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
//   }
//
//   const handleSaveClick = (id: GridRowId) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
//   }
//
//   const handleDeleteClick = (id: GridRowId) => () => {
//     setRows(rows.filter(row => row.id !== id))
//   }
//
//   const handleCancelClick = (id: GridRowId) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { ignoreModifications: true, mode: GridRowModes.View },
//     })
//
//     const editedRow = rows.find(row => row.id === id)
//
//     if (editedRow!.isNew) {
//       setRows(rows.filter(row => row.id !== id))
//     }
//   }
//
//   const processRowUpdate = (newRow: GridRowModel) => {
//     const updatedRow = { ...newRow, isNew: false }
//
//     setRows(rows.map(row => (row.id === newRow.id ? updatedRow : row)))
//
//     return updatedRow
//   }
//
//   const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
//     setRowModesModel(newRowModesModel)
//   }
//
//   const columns: GridColDef[] = [
//     { editable: true, field: 'documentName', headerName: 'Document Name', width: 130 },
//     { editable: true, field: 'documentType', headerName: 'Document Type', width: 130 },
//     { editable: true, field: 'documentStatus', headerName: 'Document Status', width: 130 },
//     { editable: true, field: 'employeeNumber', headerName: 'Employee Number', width: 130 },
//     {
//       editable: true,
//       field: 'employeeSignatureName',
//       headerName: 'Employee Signature Name',
//       width: 150,
//     },
//     { editable: true, field: 'employeeSigDate', headerName: 'Employee Sig. Date', width: 130 },
//     {
//       editable: true,
//       field: 'companySignatureName',
//       headerName: 'Company Signature Name',
//       width: 150,
//     },
//     { field: 'companySigDate', headerName: 'Company Sig. Date', width: 130 },
//
//     {
//       cellClassName: 'actions',
//       field: 'actions',
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit
//
//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label={'Save'}
//               onClick={handleSaveClick(id)}
//               sx={{
//                 color: 'primary.main',
//               }}
//             />,
//             <GridActionsCellItem
//               className={'textPrimary'}
//               color={'inherit'}
//               icon={<CancelIcon />}
//               label={'Cancel'}
//               onClick={handleCancelClick(id)}
//             />,
//           ]
//         }
//
//         return [
//           <GridActionsCellItem
//             className={'textPrimary'}
//             color={'inherit'}
//             icon={<EditIcon />}
//             label={'Edit'}
//             onClick={handleEditClick(id)}
//           />,
//           <GridActionsCellItem
//             color={'inherit'}
//             icon={<DeleteIcon />}
//             label={'Delete'}
//             onClick={handleDeleteClick(id)}
//           />,
//         ]
//       },
//       headerName: 'Actions',
//       type: 'actions',
//       width: 100,
//     },
//   ]
//
//   return (
//     <div className={s.main_table}>
//       <div className={s.table_title}>
//         <DataGrid
//           columns={columns}
//           editMode={'row'}
//           onRowEditStop={handleRowEditStop}
//           onRowModesModelChange={handleRowModesModelChange}
//           processRowUpdate={processRowUpdate}
//           rowModesModel={rowModesModel}
//           rows={rows}
//           slotProps={{
//             toolbar: { setRowModesModel, setRows },
//           }}
//           slots={{
//             toolbar: EditToolbar as GridSlots['toolbar'],
//           }}
//         />
//       </div>
//     </div>
//   )
// }

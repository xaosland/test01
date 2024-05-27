import React, { ChangeEvent, useState } from 'react'

import { TypeDocument } from '../service/documents.type.ts'

type EditPropsType = {
  document: TypeDocument
  field: keyof TypeDocument
  onChange: (documentID: string, field: string, value: string) => void
}

export const EditableSpan = React.memo(function (props: EditPropsType) {
  const [editMode, setEditMode] = useState(false)
  const [field, setField] = useState(props.document[props.field])
  const activateEditMode = () => {
    setEditMode(true)
  }

  const activateViewMode = () => {
    setEditMode(false)
    if (field.trim() !== ' ') {
      props.onChange(props.document.id, props.field, field)
    } else {
      setField(props.document[props.field])
    }
  }

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim()

    if (inputValue !== '') {
      setField(inputValue || 'Введите значение')
    }
  }

  return editMode ? (
    <input autoFocus onBlur={activateViewMode} onChange={changeValue} value={field} />
  ) : (
    <span onDoubleClick={activateEditMode}>{field}</span>
  )
})

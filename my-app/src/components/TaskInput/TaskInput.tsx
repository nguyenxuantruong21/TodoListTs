import React, { useCallback, useMemo, useState } from 'react'
import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'
import connect, { ExtraInfoType } from '../../HOC/connect'
import Title from '../Title'

interface TaskInputProps extends ExtraInfoType {
  addTodo: (name: string) => void
  editTodo: (name: string) => void
  currentTodo: Todo | null
  finishEditTodo: () => void
}

function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props
  const [name, setName] = useState<string>('')

  const address = useMemo(() => {
    return {
      street: '96 ha dong ha noi'
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  const handleClickTitle = useCallback((value: any) => {
    console.log(value)
  }, [])

  return (
    <div>
      <div className='mb-2'>
        <Title address={address} handleClickTitle={handleClickTitle} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='caption in here'
            value={currentTodo ? currentTodo.name : name}
            onChange={onChangeInput}
          />
          <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
        </form>
      </div>
    </div>
  )
}

export default connect(TaskInput)

import React, { useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setName(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(name)
    setName('')
  }

  return (
    <div>
      <div className='mb-2'>
        <h1 className={styles.title}>To do list typescript</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type='text' placeholder='caption in here' onChange={onChangeInput} />
          <button type='submit'>➕</button>
        </form>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (name: String) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList doneTaskList={false} />
        <TaskList doneTaskList={true} />
      </div>
    </div>
  )
}

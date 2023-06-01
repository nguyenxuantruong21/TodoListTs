import styles from './taskList.module.scss'

interface TaskListProps {
  doneTaskList: boolean
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList } = props

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={`${styles.taskCheckbox} ${styles.taskNameDone}`} />
          <span className={styles.taskName}>Hoc Bai</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖋️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
        <div className={styles.task}>
          <input type='checkbox' className={`${styles.taskCheckbox} ${styles.taskNameDone}`} />
          <span className={styles.taskName}>Hoc Bai</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>🖋️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}

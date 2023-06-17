import React, { useRef } from 'react'
import styles from './Title.module.scss'

interface TitleProps {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const clickH1 = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'blue'
    }
  }
  return (
    <h1 className={styles.title} ref={h1Ref} onClick={clickH1}>
      To do list typescript
    </h1>
  )
}

export default React.memo(Title)

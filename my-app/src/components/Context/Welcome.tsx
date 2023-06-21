import React, { useState } from 'react'
import './Welcome.css'

interface ThemeType {
  color: 'light' | 'dark'
}

export default function Welcome() {
  const [theme, setTheme] = useState<ThemeType>({ color: 'light' })

  const onChangeTheme = (color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }

  return (
    <div className='welcome'>
      <Form />
      <Label theme={theme} onChangeTheme={onChangeTheme} />
    </div>
  )
}

const Label = ({ theme, onChangeTheme }: { theme: ThemeType; onChangeTheme: (color: 'light' | 'dark') => void }) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
      />
      <label>Use dark mode</label>
    </div>
  )
}

const Form = () => {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const theme = { color: 'light' }
  const className = 'panel-' + theme.color
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({ children }: { children: React.ReactNode }) => {
  const theme = { color: 'light' }
  const className = 'button-' + theme.color
  return <button className={className}>{children}</button>
}

import { debug, log } from '../constants'

export interface ExtraInfoType {
  debug: boolean
  log: (value: any) => void
}

export default function connect<T>(Components: React.ComponentType<T>) {
  return function newComponents(props: Omit<T, keyof ExtraInfoType>) {
    const _props = props as T
    return <Components {..._props} debug={debug} log={log} />
  }
}

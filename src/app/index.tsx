import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Container, Provider as UnstatedProvider, Subscribe } from 'unstated'
import { Main } from './main'
import { authUser } from './utils/auth'
import { getTheme, setTheme as setPersistentTheme, Theme } from './utils/theme'

declare module 'react' {
  type Provider<T> = React.ComponentType<{
    value: T;
    children?: ReactNode;
  }>
  type Consumer<T> = ComponentType<{
    children: (value: T) => ReactNode;
    unstable_observedBits?: number;
  }>
  interface Context<T> {
    Provider: Provider<T>
    Consumer: Consumer<T>
  }
  function createContext<T>(defaultValue: T, calculateChangedBits?: (prev: T, next: T) => number): Context<T>
}

export const SessionContext = React.createContext('session')

class App extends React.Component<{ deviceID: string }> {
  public render() {
    const { deviceID } = this.props
    return (
      <SessionContext.Provider value={deviceID}>
      <UnstatedProvider>
          <Main />
        </UnstatedProvider>
      </SessionContext.Provider>
    )
  }
}

const mount = ({ deviceID }) => ReactDOM.render(
  <App deviceID={deviceID} />,
  document.querySelector('#root'),
)

authUser(mount)

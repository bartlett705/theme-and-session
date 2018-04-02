import * as React from 'react'
import { Subscribe } from 'unstated'
import { SessionContext } from '..'
import '../../sass/main.scss'
import { Toggleable } from '../toggleable'
import { TopNav } from '../top-nav'
import { ThemeContainer } from '../unstate/theme'
import { Theme } from '../utils/theme'

class MainComponent extends React.Component<{}> {
  public render() {
    return (
      <React.Fragment>
        <TopNav />
        <Subscribe to={[ThemeContainer]} >
          {(theme) => (
            <main className={theme.state.theme} >
              <Widget />
            </main>
          )}
        </Subscribe>
      </React.Fragment>
    )
  }
}

export const Main = MainComponent

const Widget: React.SFC = () => (
  <Toggleable content={<Content />}>
    {(toggled, onToggle) => (
      <button onClick={onToggle}><h1>Yo {toggled ? '-' : '+'}</h1></button>
    )}
  </Toggleable>
)

const Content: React.SFC = () => (
  <SessionContext.Consumer>
    {(deviceID) => <h2 className="content">neato-keen {deviceID}</h2>}
  </SessionContext.Consumer>
)

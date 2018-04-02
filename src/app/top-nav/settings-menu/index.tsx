import * as React from 'react'
import { Subscribe } from 'unstated'
import { Balloon } from '../../balloon'
import { ThemeContainer } from '../../unstate/theme'
import { setTheme as setPersistentTheme, Theme } from '../../utils/theme'

export const SettingsMenu: React.SFC = () => (
    <Balloon>
        <Subscribe to={[ThemeContainer]} >
            {(theme) => (
                <select
                  defaultValue={theme.state.theme}
                  onChange={(e) => theme.setState({ theme: e.currentTarget.value })}
                >
                    <option value={Theme.Light}>Light</option>
                    <option value={Theme.Dark}>Dark</option>
                    <option value={Theme.Blue}>Blue</option>
                </select>
            )}
        </Subscribe>
    </Balloon>
)

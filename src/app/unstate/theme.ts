
import { Container } from 'unstated'
import { getTheme, setTheme as setPersistentTheme, Theme } from '../utils/theme'

interface State {
    theme: Theme
}

export class ThemeContainer extends Container<State> {
    public state = { theme: getTheme() }

    public setTheme(theme: string) {
        if (!isTheme(theme)) { return }
        setPersistentTheme(theme)
        this.setState({ theme })
    }
}

function isTheme(theme: string): theme is Theme {
    return ['light', 'dark', 'blue'].includes(theme)
}

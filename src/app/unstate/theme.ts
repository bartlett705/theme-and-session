
import { Container } from 'unstated'
import { getTheme, setTheme as setPersistentTheme, Theme } from '../utils/theme'

interface State {
    theme: Theme
}

export class ThemeContainer extends Container<State> {
    public state = { theme: getTheme() }

    public setTheme(theme: Theme) {
        setPersistentTheme(theme)
        this.setState({ theme })
    }
}

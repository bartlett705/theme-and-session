const THEME_KEY = 'theme'

export enum Theme {
    Light = 'light',
    Dark = 'dark',
    Blue = 'blue',
}

export function getTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY)

    return (storedTheme || setTheme()) as Theme
}

export function setTheme(theme = Theme.Dark) {
    localStorage.setItem(THEME_KEY, theme)
}

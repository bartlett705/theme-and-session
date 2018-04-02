import * as React from 'react'
import { Toggleable } from '../toggleable'
import { SettingsMenu } from './settings-menu'

export const TopNav: React.SFC = () => (
    <ToggleableMenu
        content={<SettingsMenu />}
        title="Settings"
    />
)

const ToggleableMenu = (
    { content, title }:
        { content: React.ReactNode, title: string },
) => (
        <div className="balloon-menu">
            <Toggleable content={content}>
                {(toggled, onToggle) => (
                    <button onClick={onToggle} >
                        <div className={`toggleable_title--${toggled ? 'on' : 'off'}`}>
                            {title}
                        </div>
                    </button>
                )}
            </Toggleable>
        </div>
    )

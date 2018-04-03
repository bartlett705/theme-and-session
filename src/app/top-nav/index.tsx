import * as React from 'react'
import { Toggleable } from '../toggleable'
import { SettingsMenu } from './settings-menu'

export const TopNav: React.SFC = () => (
    <div className="top-nav">
        <div className="top-nav-contents">
            <ToggleableMenu
                content={<SettingsMenu />}
                title="⚙"
            />
        </div>
    </div>
)

const ToggleableMenu = (
    { content, title }:
        { content: React.ReactNode, title: string },
) => (
        <div className="balloon-menu">
            <Toggleable content={content}>
                {(toggled, onToggle) => (
                    <button className={`toggleable_button--${toggled ? 'on' : 'off'}`} onClick={onToggle} >
                        <div className={`toggleable_title--${toggled ? 'on' : 'off'}`}>
                            {title}
                        </div>
                    </button>
                )}
            </Toggleable>
        </div>
    )

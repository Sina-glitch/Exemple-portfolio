import React from 'react';
import './SwitchMode.module.scss'

export default function SwitchMode() {
    let count = 0
    return (
        <div className="SwitchMode container">
            <p onClick={
                () => {
                    if (count === 0) {
                        document.body.className = "gb-light"
                        count = 1
                    } else if (count === 1) {
                        document.body.className = "gruvbox-light"
                        count = 2
                    } else if (count === 2) {
                        document.body.className = "gruvbox-dark"
                        count = 3
                    } else if (count === 3) {
                        document.body.className = ""
                        count = 0
                    }
                }
            }>Switch Mode</p>
        </div >
    )
}

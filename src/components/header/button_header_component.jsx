import React from "react"
import "../../themes/components/button_menu.scss"

export default function ButtonHeader(props) {
    return (
        <button type="button" className={props.styleOfButton} onClick={() => window.open("http://www.google.com.br", '_blank')}>
            {props.name}
        </button>
    )
}

import React from "react"
import ButtonSocial from "./button_social_body_component"
import '../../themes/layout/body_theme.scss'

export default function GridTextImagem(props) {
    return (

        <div className={props.style}>
            <div>
            {props.children[0]}

            </div>
            
            <div className=".style-layout-text">
                {props.children[1]}
                {props.children[2]}
                <ButtonSocial />
            </div>
        </div>


    )
}
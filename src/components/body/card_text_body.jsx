import React from "react"

export default function CardText(props) {
    return <p className={props.styleOfText}>{props.text} <br /> {props.text2} </p>
}
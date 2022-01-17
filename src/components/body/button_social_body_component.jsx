import React from "react"
import Icone1 from "../../assets/icone_1.png"
import Icone2 from "../../assets/icone_2.png"
import "../../themes/components/button_socialmedia.scss"

export default function ButtonSocial(props) {
    return (
        <div className="style-button-social">
            <img
                src={Icone1}
                onClick={() => window.open("http://www.google.com.br", '_blank')}
                alt="icone social 1"
            />
            <img src={Icone2} alt="icone social 2"
                onClick={() => window.open("http://www.google.com.br", '_blank')}

            />
        </div>
    )
}

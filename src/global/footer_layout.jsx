import React from "react"
import ButtonSocial from "../components/body/button_social_body_component"
import "../themes/components/banner_footer.scss"
import "../themes/base/tipografy.scss"

export default function Footer(props) {
    return (
        <footer className="style-banner-footer">

            <div className="style-layout-text">
                <p className="style-text-of-footer">
                    Baixe o aplicativo em nossas <br />
                    Lojas
                </p>

            </div>

            <div className="style-layout-buttons">
                <ButtonSocial />
            </div>




        </footer>
    )
}

import React from "react"
import PrimeiraImagem from "../components/body/primeira_image_body_component"
import SegundaImagem from "../components/body/segunda_imagem_body_component"
import CardInformation from "../components/body/card_information_body_component"

import "../themes/layout/body_theme.scss"
import "./../themes/components/card_information.scss"

import GridTextImagem from "../components/body/grid_body_component"
import CardText from "../components/body/card_text_body"

export default function Body(props) {
    return (
        <main className="style-layout-body">

            <GridTextImagem
                style="style-layout-text-image"
            >
                <PrimeiraImagem

                />

                <CardText
                    text="Consiga acesso instantâneo"
                    styleOfText="style-text-commom"
                />

                <CardText

                    text="Obtenha empréstimos instantâneos com facilidade"
                    text2="Em seu Smartphone."
                    styleOfText="style-text-substitle"
                />



            </GridTextImagem>

            <GridTextImagem
                style="style-layout-text-image"
            >
                <SegundaImagem

                />
                <CardText

                    text="Economize em seus próprios"
                    text2="Termos"
                    styleOfText="style-text-commom"
                />
                <CardText text="Com uma poupança que realmente dá dinheiro"
                    styleOfText="style-text-substitle"
                />


            </GridTextImagem>

            <div className="align-text-card">
                <CardText
                    styleOfText="style-text-commom"
                    text="Conheça as condições"
                />
            </div>



            <div className="style-layout-card-variable ">



                
                <CardInformation
                    color="#FF814A"
                    description="Baixe o aplicativo gratuitamente"

                />
                <CardInformation
                    color="#582EFF"
                    description="Solicite um empréstimo"

                />
                <CardInformation
                    color="#31C5A1"
                    description="Seu empréstimo irá cair em sua conta"

                />

              

                
            </div>
        </main>
    )
}



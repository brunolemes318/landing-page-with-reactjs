import React from "react";
import LogoApp from "../components/header/logo_header_component";
import ButtonHeader from "../components/header/button_header_component";
import './../themes/layout/header_theme.scss';

export default function Header(props) {
  return (
    <header className="style-layout-heather">
      <LogoApp />
      <div>
        <ButtonHeader name="Home" styleOfButton="style-button-commom " />
        <ButtonHeader name="Contatos"styleOfButton="style-button-commom " />
        <ButtonHeader name="Conheça" styleOfButton="style-button-commom "/>
      </div>
    </header>
  );
}

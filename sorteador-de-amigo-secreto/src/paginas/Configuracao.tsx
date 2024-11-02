import React from "react";
import Formulario from "../components/Formulario";
import { ListaParticpantes } from "../components/ListaParticpantes";
import Rodape from "../components/Rodape";

export function Configuracao() {
  return (
    <>
      <Formulario />
      <ListaParticpantes />
      <Rodape />
    </>
  );
}

import React from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

export function Rodape() {
  
  const participantes = useListaDeParticipantes();

  return (
    <footer>
      <button disabled={participantes.length < 3} type="button">
        iniciar brincadeira!
      </button>
    </footer>
  );
}

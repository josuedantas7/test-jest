import React from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

export function ListaParticpantes() {
  const participantes: string[] = useListaDeParticipantes()

  return (
    <ul>
      {participantes.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

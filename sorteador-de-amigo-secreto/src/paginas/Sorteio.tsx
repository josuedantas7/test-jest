import React from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

export default function Sorteio() {
  const participantes = useListaDeParticipantes();
  return (
    <section>
      <form>
        <select name="participanteDavez" id="participanteDavez">
          {participantes.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
}

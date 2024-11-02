import React, { useState } from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";

export default function Sorteio() {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState<string>("");
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio()
  
  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAmigoSecreto(resultado.get(participanteDaVez)!)
    setTimeout(() => setAmigoSecreto(''), 3000)
  };

  return (
    <section>
      <form onSubmit={sortear}>
        <select
          required
          placeholder="Selecione o seu nome"
          name="participanteDavez"
          id="participanteDavez"
          value={participanteDaVez}
          onChange={(e) => setParticipanteDaVez(e.target.value)}
        >
          {participantes.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
}

import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../state/hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";

const Formulario = () => {
    const [name, setName] = useState("")

    const inputRef = useRef<HTMLInputElement>(null);

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        adicionarNaLista(name)
        setName('')

        inputRef.current?.focus();

    }
  return (
    <form onSubmit={adicionarParticipante}>
      <input ref={inputRef} value={name} onChange={({target}) => setName(target.value)} type="text" placeholder="Insira os nomes dos participantes" />
      <button disabled={!name}>Adicionar</button>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  );
};

export default Formulario;

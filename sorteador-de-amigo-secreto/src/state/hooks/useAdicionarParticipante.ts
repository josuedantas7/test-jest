import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
    
    const setLista = useSetRecoilState(listaParticipantesState)
    const list = useRecoilValue(listaParticipantesState)
    
    const setErro = useSetRecoilState(errorState)

    return (nomeDoParticipante: string) => {

        if (list.includes(nomeDoParticipante)) return setErro("Nomes duplicados não são permitidos!")
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    };
};
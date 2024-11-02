import shuffle from "just-shuffle";

export function realizarSorteio(participantes : string[]) {
    const totalParticipantes = participantes.length
    const embaralhado = shuffle(participantes)

    const resultado = new Map<string, string>()

    for (let index = 0; index < totalParticipantes; index++) {
        let indiceDoAmigo;
        if (index === participantes.length -1){
            indiceDoAmigo = 0
        } else {
            indiceDoAmigo = index + 1
        }

        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
    }

    return resultado
}
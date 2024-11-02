import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não deve tirar o próprio nome', () => {
        const participantes = ['Ana', 'Catarina', 'Julia', 'Joao', 'Marilene', 'Nathália']
        
        const sorteio = realizarSorteio(participantes)

        participantes.forEach(p => {
            const amigoSecreto = sorteio.get(p)

            expect(p).not.toEqual(amigoSecreto)
        })
    })
})
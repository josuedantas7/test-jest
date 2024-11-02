import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe("na página de de sorteio", () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([
            'Ana',
            'Catarina',
            'Julia'
        ])
    })
    
    
    test("todos os participantes podem exibir o seu amigo secreto", () => {
        render(
            <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );
    
    const participantes = useListaDeParticipantes()
    const opcoes = screen.queryAllByRole('option')

    expect(opcoes).toHaveLength(participantes.length)
  });
});

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("onde não existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(["Ana", "Catarina"]);
  });
  test("o botão não pode estar habilitado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeDisabled();
  });
});

describe("onde existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Julia",
    ]);
  });

  test("o botão tem que estar habilitado", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    expect(botao).toBeEnabled();
  });

  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");

    fireEvent.click(botao)

    expect(mockNavegacao).toHaveBeenCalledTimes(1)
    expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
  });
});

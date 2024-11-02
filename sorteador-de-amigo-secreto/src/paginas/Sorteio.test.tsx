import React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Sorteio from "./Sorteio";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock("../state/hooks/useResultadoSorteio", () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe("na página de de sorteio", () => {
  const resultado = new Map([
    ["Ana", "Catarina"],
    ["Catarina", "Jorel"],
    ["Jorel", "Ana"],
  ]);

  const participantes = ["Ana", "Catarina", "Jorel"];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers(); // Limpa os temporizadores após cada teste
  });

  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");

    expect(opcoes).toHaveLength(participantes.length);
  });

  test("o amigo secreto é exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, { target: { value: participantes[0] } });

    const botao = screen.getByRole("button");

    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole("alert");

    expect(amigoSecreto).toBeInTheDocument();
  });

  test("o nome do amigo secreto deve sumir depois de 3 segundos", async () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");

    fireEvent.change(select, { target: { value: participantes[0] } });

    const botao = screen.getByRole("button");

    fireEvent.click(botao);

    let amigoSecreto = screen.queryByRole("alert");

    expect(amigoSecreto).toBeInTheDocument();

    await act(async () => {
        jest.advanceTimersByTime(3000);
      });

    amigoSecreto = screen.queryByRole("alert");

    expect(amigoSecreto).toBeNull();
  });
});

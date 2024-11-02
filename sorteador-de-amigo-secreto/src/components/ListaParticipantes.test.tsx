import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ListaParticpantes } from "./ListaParticpantes";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock("../state/hooks/useListaDeParticipantes", () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe("DESCRIBE: lista de participantes vazia", () => {
  // mock
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  test("testando lista de participantes vazia", () => {
    render(
      <RecoilRoot>
        <ListaParticpantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");

    expect(itens).toHaveLength(0);
  });
});

describe("DESCRIBE: lista de participantes preenchida", () => {
  //mock
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(["Ana", "Catarina"]);
  });

  test("testando lista de parcipantes com dois itens", () => {
    render(
      <RecoilRoot>
        <ListaParticpantes />
      </RecoilRoot>
    );

    const participantes = useListaDeParticipantes();

    const itens = screen.queryAllByRole("listitem");

    expect(itens).toHaveLength(participantes.length);
  });
});

import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp/>", () => {
  test('Debe mostrar el mensaje "Hola, Soy Coku"', () => {
    const saludo = "Hola, Soy Coku";

    const { getByText } = render(<PrimeraApp saludo={saludo} />);

    expect(getByText(saludo)).toBeInTheDocument();
  });
});

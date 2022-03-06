import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en <PrimeraApp/>", () => {
  //   test('Debe mostrar el mensaje "Hola, Soy Coku"', () => {
  //     const saludo = "Hola, Soy Coku";
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  test("Debe mostrar <PrimeraApp/> correctamente", () => {
    const saludo = "Hola, Soy Coku";

    const wraper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wraper).toMatchSnapshot();
  });
});

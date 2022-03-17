import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("CounterApp Pruebas", () => {
  let wraper = shallow(<CounterApp />); // La inicializacion no es necesaria pero es funcional para el intellisense

  beforeEach(() => {
    wraper = shallow(<CounterApp />);
  });

  test("CounterApp debe hacer match con snapshot", () => {
    expect(wraper).toMatchSnapshot();
  });

  test("CounterApp debe mostrar el valor por defecto 100", () => {
    const wraper = shallow(<CounterApp value={100} />);
    const counterText = wraper.find("h2").text().trim(); //text convierte en texto, trim quita espacios
    expect(counterText).toBe("100");
  });

  test("Debe de incrementar con el boton +1", () => {
    wraper.find("button").at(0).simulate("click"); //at define el indice del elemento, simulate simula el evento
    const counterText = wraper.find("h2").text().trim();
    expect(counterText).toBe("11");
  });

  test("Debe de decrementar con el boton -1", () => {
    wraper.find("button").at(2).simulate("click"); //at define el indice del elemento, simulate simula el evento
    const counterText = wraper.find("h2").text().trim();
    expect(counterText).toBe("9");
  });

  test("Debe de resetear con el boton reset", () => {
    wraper.find("button").at(1).simulate("click"); //at define el indice del elemento, simulate simula el evento
    const counterText = wraper.find("h2").text().trim();
    expect(counterText).toBe("10");
  });
});

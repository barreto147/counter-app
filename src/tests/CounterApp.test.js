import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("CounterApp Pruebas", () => {
  test("CounterApp debe hacer match con snapshot", () => {
    const wraper = shallow(<CounterApp />);
    expect(wraper).toMatchSnapshot();
  });
  test("CounterApp debe mostrar el valor por defecto 100", () => {
    const wraper = shallow(<CounterApp value={100} />);
    const counterText = wraper.find("h2").text().trim();
    expect(counterText).toBe("100");
  });
});

import { getSaludo } from "../../base/02-template-string";

describe("02-template-string Pruebas", () => {
  test("getSaludo debe retornar Hola Antonio", () => {
    const nombre = "Antonio";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });

  test("getSaludo debe retornar Hola Carlos si no hay argumento", () => {
    const saludo2 = getSaludo();

    expect(saludo2).toBe("Hola Carlos");
  });
});

describe("Pruebas de demo.test.js", () => {
  test("Deben ser iguales los strings", () => {
    //1. Inicializacion
    const mensaje = "Hola mundo";

    //2. Estimulo
    const mensaje2 = `Hola mundo`;

    //3. Observar el comprotamiento
    expect(mensaje).toBe(mensaje2);
  });
});

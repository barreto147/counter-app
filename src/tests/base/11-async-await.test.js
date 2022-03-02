import { getImagen } from "../../base/11-async-await";

describe("11-async-await Pruebas", () => {
  test("Debe retornar el url de la imagen", async () => {
    const url = await getImagen();

    console.log(url);

    expect(url.includes("https://")).toBe(true);
  });
});

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("05-funciones Pruebas", () => {
  test("debe retornar un obj", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("debe retornar un obj 2", () => {
    const nombre = "Carlos";

    const user = getUsuarioActivo("Carlos");

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});

import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("08-imp-exp Pruebas", () => {
  test("getHeroeById debe retornar un heroe segun el id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("getHeroeById debe retornar undefined cuando el heroe no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de dc", () => {
    const owner = "DC";
    const heroeList = getHeroesByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroeList).toEqual(heroesData);
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de marvel", () => {
    const owner = "Marvel";
    const heroeList = getHeroesByOwner(owner);

    expect(heroeList.length).toBe(2);
  });
});
